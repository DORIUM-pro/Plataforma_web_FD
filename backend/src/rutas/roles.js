const express = require('express');
const router = express.Router();
const rolesController = require('../controladores/rolesController');

// Listar todos los roles
router.get('/', rolesController.listarRoles);

// Crear un rol nuevo
router.post('/', rolesController.crearRol);

// Actualizar un rol por ID
router.put('/:id', rolesController.actualizarRol);

// Eliminar un rol por ID
router.delete('/:id', rolesController.eliminarRol);

module.exports = router;