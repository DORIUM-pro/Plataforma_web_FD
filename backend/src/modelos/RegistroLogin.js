const { DataTypes } = require('sequelize');
const sequelize = require('../configuracion/db');

const RegistroLogin = sequelize.define('RegistroLogin', {
  usuario_id: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  exito: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },
  fecha: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
  ip: {
    type: DataTypes.STRING,
  }
}, {
  tableName: 'registro_login',
  timestamps: false
});

module.exports = RegistroLogin;