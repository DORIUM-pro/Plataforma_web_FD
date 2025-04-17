const { DataTypes } = require('sequelize');
const sequelize = require('../../configuracion/baseDeDatos');

/**
 * Modelo de Cliente para la plataforma Glamping.
 */
const Cliente = sequelize.define('Cliente', {
  id: {
    type: DataTypes.INTEGER.UNSIGNED,
    autoIncrement: true,
    primaryKey: true
  },
  nombre: {
    type: DataTypes.STRING(100),
    allowNull: false
  },
  correo_electronico: {
    type: DataTypes.STRING(100),
    allowNull: false,
    unique: true,
    validate: {
      isEmail: true
    }
  },
  telefono: {
    type: DataTypes.STRING(15),
    allowNull: false
  }
}, {
  tableName: 'clientes',
  timestamps: false
});

module.exports = Cliente;