const express = require('express');
const router = express.Router();
const clientesController = require('../controladores/clientesController');

// Listar todos los clientes
router.get('/', clientesController.listarClientes);

// Crear nuevo cliente
router.post('/', clientesController.crearCliente);

// Actualizar cliente por ID
router.put('/:id', clientesController.actualizarCliente);

// Eliminar cliente por ID
router.delete('/:id', clientesController.eliminarCliente);

module.exports = router;