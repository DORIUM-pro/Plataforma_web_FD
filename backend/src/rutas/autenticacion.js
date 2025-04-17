console.log('Cargando rutas de autenticación');

const express = require('express');
const router = express.Router();
const autenticacionControlador = require('../controladores/autenticacionControlador');

router.post('/login', autenticacionControlador.login);
router.post('/registro', autenticacionControlador.registro);

module.exports = router;