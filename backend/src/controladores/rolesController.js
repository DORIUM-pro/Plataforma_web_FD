const Rol = require('../modelos/Rol');

// Listar roles
exports.listarRoles = async (req, res) => {
  try {
    const roles = await Rol.findAll();
    res.json(roles);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Crear rol nuevo
exports.crearRol = async (req, res) => {
  try {
    const rol = await Rol.create(req.body);
    res.status(201).json(rol);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Actualizar rol
exports.actualizarRol = async (req, res) => {
  try {
    const rol = await Rol.findByPk(req.params.id);
    if (!rol) return res.status(404).json({ error: 'Rol no encontrado' });
    await rol.update(req.body);
    res.json(rol);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Eliminar rol
exports.eliminarRol = async (req, res) => {
  try {
    const rol = await Rol.findByPk(req.params.id);
    if (!rol) return res.status(404).json({ error: 'Rol no encontrado' });
    await rol.destroy();
    res.json({ mensaje: 'Rol eliminado' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};