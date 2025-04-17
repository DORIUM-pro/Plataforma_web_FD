const express = require('express');
const router = express.Router();
const reservasController = require('../controladores/reservasController');
const { validarCreacionReserva } = require('../middleware/validacionReserva');

// Listar todas las reservas
router.get('/', reservasController.listarReservas);

// Crear nueva reserva, con validación robusta
router.post('/', validarCreacionReserva, reservasController.crearReserva);

// Actualizar una reserva por ID
router.put('/:id', reservasController.actualizarReserva);

// Eliminar una reserva por ID
router.delete('/:id', reservasController.eliminarReserva);

module.exports = router;
