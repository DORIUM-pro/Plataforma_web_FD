const { DataTypes } = require('sequelize');
const sequelize = require('../../configuracion/baseDeDatos');

/**
 * Modelo de Rol para la plataforma Glamping.
 * Campos: id (PK), nombre, permisos (arreglo de strings tipo JSON).
 */
const Rol = sequelize.define('Rol', {
  id: {
    type: DataTypes.INTEGER.UNSIGNED,
    autoIncrement: true,
    primaryKey: true
  },
  nombre: {
    type: DataTypes.STRING(50),
    allowNull: false,
    unique: true,
    comment: "Ejemplo: Administrador, Limpieza, Recepción, Mantenimiento"
  },
  permisos: {
    type: DataTypes.JSON,
    allowNull: false,
    comment: 'Permisos como ["GESTIONAR_RESERVAS", "VER_HABITACIONES"]'
  }
}, {
  tableName: 'roles',
  timestamps: false
});

module.exports = Rol;