const express = require('express');
const router = express.Router();
const auth = require('../middlewares/auth');
const Bitacora = require('../models/Bitacora');

// Ruta protegida para ver la bitácora de acciones
router.get('/', auth, async (req, res) => {
  try {
    const logs = await Bitacora.findAll({ order: [['fecha', 'DESC']], limit: 100 });
    res.json(logs);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;