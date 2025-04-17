const Usuario = require('../modelos/Usuario');
const LoginLog = require('../modelos/LoginLog');
const bcrypt = require('bcrypt');

exports.login = async (req, res) => {
  const { email, password } = req.body;
  const ip = req.ip;
  try {
    const usuario = await Usuario.findOne({ where: { email } });
    let exito = false;
    if (usuario && await bcrypt.compare(password, usuario.password)) {
      exito = true;
      // Aquí puedes generar un token JWT si lo deseas
      res.json({ mensaje: 'Login exitoso', usuario: usuario.id });
    } else {
      res.status(401).json({ error: 'Credenciales inválidas' });
    }
    // Guardar intento de login
    await LoginLog.create({
      usuario_id: usuario ? usuario.id : null,
      exito,
      ip,
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
  
};






exports.registro = async (req, res) => {
  try {
    const { nombre, correo_electronico, contrasena } = req.body;
    const existe = await Usuario.findOne({ where: { correo_electronico } });
    if (existe) {
      return res.status(400).json({ error: 'El usuario ya existe' });
    }
    const hash = await bcrypt.hash(contrasena, 10);
    const usuario = await Usuario.create({ nombre, correo_electronico, contrasena: hash });
    res.json({ mensaje: 'Usuario registrado', usuario: usuario.id });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};