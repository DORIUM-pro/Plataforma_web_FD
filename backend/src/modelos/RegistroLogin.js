const { DataTypes } = require('sequelize');
const sequelize = require('../configuracion/db');

const LoginLog = sequelize.define('LoginLog', {
  usuario_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
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
  tableName: 'login_logs',
  timestamps: false,
});

module.exports = LoginLog;