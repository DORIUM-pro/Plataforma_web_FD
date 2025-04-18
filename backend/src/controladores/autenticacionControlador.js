require('dotenv').config();
const nodemailer = require('nodemailer'); 
const jwt = require('jsonwebtoken');
const Rol = require('../modelos/Rol');
const Bitacora = require('../models/Bitacora');
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
      rol_id: 3 // Cliente por defecto
    });

    // Bitácora: registro de nuevo usuario
    await Bitacora.create({
      usuario_id: usuario.id,
      accion: 'Registro',
      descripcion: `Usuario ${nombre} (${correo_electronico}) registrado`
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

      // Buscar el nombre del rol
      const rolObj = await Rol.findOne({ where: { id: usuario.rol_id } });
      const rolNombre = rolObj ? rolObj.nombre.toLowerCase() : 'cliente';

      // Generar el token JWT
      const payload = {
        id: usuario.id,
        rol: rolNombre,
        nombre: usuario.nombre
      };
      const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '2h' });

      await LoginLog.create({ usuario_id: usuario.id, exito, ip });

      // Bitácora: login exitoso
      await Bitacora.create({
        usuario_id: usuario.id,
        accion: 'Login',
        descripcion: `Usuario ${usuario.nombre} (${usuario.correo_electronico}) inició sesión`
      });

      return res.json({
        mensaje: 'Login exitoso',
        usuario: usuario.id,
        nombre: usuario.nombre,
        rol: rolNombre,
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

exports.crearAdmin = async (req, res) => {
  const { nombre, correo_electronico, contrasena, llave } = req.body;
  if (llave !== process.env.ADMIN_KEY) {
    return res.status(403).json({ error: 'Llave especial incorrecta' });
  }
  // Verifica si el usuario ya existe
  const existe = await Usuario.findOne({ where: { correo_electronico } });
  if (existe) {
    return res.status(400).json({ error: 'El usuario ya existe' });
  }
  const hash = await bcrypt.hash(contrasena, 10);
  const usuario = await Usuario.create({
    nombre,
    correo_electronico,
    contrasena: hash,
    rol_id: 1 // ID del rol administrador
  });

  // Bitácora: creación de administrador
  await Bitacora.create({
    usuario_id: req.usuario?.id || 0,
    accion: 'Crear administrador',
    descripcion: `Administrador ${nombre} (${correo_electronico}) creado`
  });

  res.json({ mensaje: 'Administrador creado correctamente', usuario: usuario.id });
};

exports.crearEmpleado = async (req, res) => {
  const { nombre, correo_electronico, contrasena, rol } = req.body;
  // Verifica si el usuario ya existe
  const existe = await Usuario.findOne({ where: { correo_electronico } });
  if (existe) {
    return res.status(400).json({ error: 'El usuario ya existe' });
  }
  // Busca el ID del rol por nombre
  const rolObj = await Rol.findOne({ where: { nombre: rol } });
  if (!rolObj) {
    return res.status(400).json({ error: 'Rol no válido' });
  }
  const hash = await bcrypt.hash(contrasena, 10);
  const usuario = await Usuario.create({
    nombre,
    correo_electronico,
    contrasena: hash,
    rol_id: rolObj.id
  });

  // Bitácora: creación de empleado
  await Bitacora.create({
    usuario_id: req.usuario?.id || 0,
    accion: 'Crear empleado',
    descripcion: `Empleado ${nombre} (${correo_electronico}) creado`
  });

  res.json({ mensaje: 'Empleado creado correctamente', usuario: usuario.id });
};

exports.asignarRol = async (req, res) => {
  const { usuario_id, rol } = req.body;
  // Busca el usuario
  const usuario = await Usuario.findByPk(usuario_id);
  if (!usuario) {
    return res.status(404).json({ error: 'Usuario no encontrado' });
  }
  // Busca el ID del rol por nombre
  const rolObj = await Rol.findOne({ where: { nombre: rol } });
  if (!rolObj) {
    return res.status(400).json({ error: 'Rol no válido' });
  }
  // Actualiza el rol del usuario
  usuario.rol_id = rolObj.id;
  await usuario.save();

  // Bitácora: asignación de rol
  await Bitacora.create({
    usuario_id: req.usuario?.id || 0,
    accion: 'Asignar rol',
    descripcion: `Rol de usuario con ID ${usuario_id} cambiado a ${rol}`
  });

  res.json({ mensaje: 'Rol asignado correctamente' });
};

exports.editarUsuario = async (req, res) => {
  const { id, nombre, correo_electronico } = req.body;
  const usuario = await Usuario.findByPk(id);
  if (!usuario) {
    return res.status(404).json({ error: 'Usuario no encontrado' });
  }
  usuario.nombre = nombre;
  usuario.correo_electronico = correo_electronico;
  await usuario.save();

  // Bitácora: edición de usuario
  await Bitacora.create({
    usuario_id: req.usuario?.id || 0,
    accion: 'Editar usuario',
    descripcion: `Usuario con ID ${id} editado`
  });

  res.json({ mensaje: 'Usuario actualizado correctamente' });
};

exports.eliminarUsuario = async (req, res) => {
  const { id } = req.body;
  const usuario = await Usuario.findByPk(id);
  if (!usuario) {
    return res.status(404).json({ error: 'Usuario no encontrado' });
  }
  await usuario.destroy();

  // Bitácora: eliminación de usuario
  await Bitacora.create({
    usuario_id: req.usuario?.id || 0,
    accion: 'Eliminar usuario',
    descripcion: `Usuario con ID ${id} eliminado`
  });

  res.json({ mensaje: 'Usuario eliminado correctamente' });
};

exports.restablecerContrasena = async (req, res) => {
  const { id, nuevaContrasena } = req.body;
  const usuario = await Usuario.findByPk(id);
  if (!usuario) {
    return res.status(404).json({ error: 'Usuario no encontrado' });
  }
  const hash = await bcrypt.hash(nuevaContrasena, 10);
  usuario.contrasena = hash;
  await usuario.save();

  // Bitácora: restablecimiento de contraseña
  await Bitacora.create({
    usuario_id: req.usuario?.id || 0,
    accion: 'Restablecer contraseña',
    descripcion: `Contraseña restablecida para usuario con ID ${id}`
  });

  res.json({ mensaje: 'Contraseña restablecida correctamente' });
};






