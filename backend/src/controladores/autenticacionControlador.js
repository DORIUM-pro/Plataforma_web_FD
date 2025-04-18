require('dotenv').config();
const nodemailer = require('nodemailer'); 
const jwt = require('jsonwebtoken'); // Agrega esto al inicio del archivo

const Usuario = require('../modelos/Usuario');
const LoginLog = require('../modelos/RegistroLogin');
const bcrypt = require('bcrypt');

exports.registro = async (req, res) => {
  try {
    const { nombre, correo_electronico, contrasena } = req.body;
    const existe = await Usuario.findOne({ where: { correo_electronico } });
    if (existe) {
      return res.status(400).json({ error: 'El usuario ya existe' });
    }
    const hash = await bcrypt.hash(contrasena, 10);
    const usuario = await Usuario.create({
      nombre,
      correo_electronico,
      contrasena: hash,
      rol_id: 3 // <-- aquí asignas el rol Cliente por defecto
    });

    // Envío de correo de bienvenida
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      }
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: correo_electronico,
      subject: '🌿 ¡Bienvenido a Frijolitos Dormilones! 🌿',
      text: `🌿 ¡Bienvenido a Frijolitos Dormilones! 🌿
    
    ¡Gracias por unirte a nuestra familia soñadora! 💤✨
    Aquí, la naturaleza abraza tus días y las estrellas velan tus noches.
    Prepárate para desconectar, respirar aire puro y descubrir el verdadero significado del descanso bajo el cielo.
    
    Tu aventura tranquila está por comenzar… ¡y no podríamos estar más felices de que formes parte de ella!
    
    — El equipo de Frijolitos Dormilones 💚`
    };

    transporter.sendMail(mailOptions, function(error, info){
      if (error) {
        console.error('Error enviando correo:', error);
      } else {
        console.log('Correo enviado: ' + info.response);
      }
    });

    res.json({ mensaje: 'Usuario registrado', usuario: usuario.id });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.login = async (req, res) => {
  const { email, password } = req.body;
  const ip = req.ip;
  try {
    const usuario = await Usuario.findOne({ where: { correo_electronico: email } });
    let exito = false;

    // Depuración
    console.log('Usuario:', usuario);
    console.log('Password recibido:', password);
    console.log('Hash en BD:', usuario ? usuario.contrasena : undefined);

    // Validaciones robustas
    if (!usuario) {
      await LoginLog.create({ usuario_id: null, exito, ip });
      return res.status(401).json({ error: 'Usuario no encontrado' });
    }
    if (!password) {
      await LoginLog.create({ usuario_id: usuario.id, exito, ip });
      return res.status(400).json({ error: 'Contraseña requerida' });
    }
    if (!usuario.contrasena) {
      await LoginLog.create({ usuario_id: usuario.id, exito, ip });
      return res.status(500).json({ error: 'El usuario no tiene contraseña registrada' });
    }

    // Comparar contraseña
    if (await bcrypt.compare(password, usuario.contrasena)) {
      exito = true;

      // Generar el token JWT
      const payload = {
        id: usuario.id,
        rol: usuario.rol_id,
        nombre: usuario.nombre
      };
      const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '2h' });

      await LoginLog.create({ usuario_id: usuario.id, exito, ip });
      console.log('Enviando respuesta:', { mensaje: 'Login exitoso', usuario: usuario.id, nombre: usuario.nombre, token });
      
      const nombre = usuario.nombre || (usuario.dataValues && usuario.dataValues.nombre);
      return res.json({
        mensaje: 'Login exitoso',
        usuario: usuario.id,
        nombre,
        token
      });
    } else {
      await LoginLog.create({ usuario_id: usuario.id, exito, ip });
      return res.status(401).json({ error: 'Contraseña incorrecta' });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};






