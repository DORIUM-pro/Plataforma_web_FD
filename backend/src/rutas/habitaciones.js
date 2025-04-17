const express = require('express');
const router = express.Router();
const habitacionesController = require('../controladores/habitacionesController');

// Listar todas las habitaciones
router.get('/', habitacionesController.listarHabitaciones);

// Crear una habitación nueva
router.post('/', habitacionesController.crearHabitacion);

// Actualizar una habitación existente por ID
router.put('/:id', habitacionesController.actualizarHabitacion);

// Eliminar una habitación por ID
router.delete('/:id', habitacionesController.eliminarHabitacion);

module.exports = router;