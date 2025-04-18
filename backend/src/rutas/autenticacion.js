console.log('Cargando rutas de autenticación');

const express = require('express');
const router = express.Router();
const autenticacionControlador = require('../controladores/autenticacionControlador');
const auth = require('../middlewares/auth');

router.post('/login', autenticacionControlador.login);
router.post('/registro', autenticacionControlador.registro);

router.post('/crear-admin', auth, autenticacionControlador.crearAdmin);
router.post('/crear-empleado', auth, autenticacionControlador.crearEmpleado);
router.post('/asignar-rol', auth, autenticacionControlador.asignarRol);
router.put('/editar-usuario', auth, autenticacionControlador.editarUsuario);
router.put('/restablecer-contrasena', auth, autenticacionControlador.restablecerContrasena);
router.delete('/eliminar-usuario', auth, autenticacionControlador.eliminarUsuario);

module.exports = router;