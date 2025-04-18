const express = require('express');
const router = express.Router();
const verificarJWT = require('../middlewares/verificarJWT');
const LoginLog = require('../modelos/RegistroLogin');

// Ruta protegida para ver la bitácora de accesos
router.get('/bitacora', verificarJWT, async (req, res) => {
  try {
    const logs = await LoginLog.findAll({ order: [['fecha_hora', 'DESC']] });
    res.json(logs);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;