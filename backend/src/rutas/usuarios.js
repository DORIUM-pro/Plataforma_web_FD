const express = require('express');
const router = express.Router();
const usuariosController = require('../controladores/usuariosController');
const { validarCreacionUsuario } = require('../middlewares/validacionUsuario');

// Listar todos los usuarios
router.get('/', usuariosController.listarUsuarios);

// Crear un usuario nuevo, ahora con validaciones robustas
router.post('/', validarCreacionUsuario, usuariosController.crearUsuario);

// Actualizar un usuario por ID
router.put('/:id', usuariosController.actualizarUsuario);

// Eliminar un usuario por ID
router.delete('/:id', usuariosController.eliminarUsuario);

module.exports = router;
