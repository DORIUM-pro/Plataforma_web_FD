const Habitacion = require('../modelos/Habitacion');

// Listar todas las habitaciones
exports.listarHabitaciones = async (req, res) => {
  try {
    const habitaciones = await Habitacion.findAll();
    res.json(habitaciones);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Crear nueva habitación
exports.crearHabitacion = async (req, res) => {
  try {
    const habitacion = await Habitacion.create(req.body);
    res.status(201).json(habitacion);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Actualizar habitación por ID
exports.actualizarHabitacion = async (req, res) => {
  try {
    const habitacion = await Habitacion.findByPk(req.params.id);
    if (!habitacion) return res.status(404).json({ error: 'Habitación no encontrada' });
    await habitacion.update(req.body);
    res.json(habitacion);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Eliminar habitación por ID
exports.eliminarHabitacion = async (req, res) => {
  try {
    const habitacion = await Habitacion.findByPk(req.params.id);
    if (!habitacion) return res.status(404).json({ error: 'Habitación no encontrada' });
    await habitacion.destroy();
    res.json({ mensaje: 'Habitación eliminada' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};