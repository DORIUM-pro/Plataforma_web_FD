const { DataTypes } = require('sequelize');
const sequelize = require('../configuracion/db'); // <- Ruta corregida

const Bitacora = sequelize.define('Bitacora', {
  usuario_id: { type: DataTypes.INTEGER, allowNull: false },
  accion: { type: DataTypes.STRING, allowNull: false },
  descripcion: { type: DataTypes.STRING, allowNull: false },
  fecha: { type: DataTypes.DATE, defaultValue: DataTypes.NOW }
});

module.exports = Bitacora;