const { DataTypes } = require('sequelize');
const sequelize = require('../configuracion/db');
const Rol = require('./Rol');

/**
 * Modelo de Usuario / Empleado para la plataforma Glamping.
 * Campos: id, nombre, correo electrónico, contraseña (hash), rol_id (FK), estado_activo.
 */
const Usuario = sequelize.define('Usuario', {
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
  // Aquí irá el hash de la contraseña (nunca el texto plano)
  contrasena: {
    type: DataTypes.STRING(100),
    allowNull: false
  },
  estado_activo: {
    type: DataTypes.BOOLEAN,
    defaultValue: true
  }
}, {
  tableName: 'usuarios',
  timestamps: false
});

// Relación: Usuario pertenece a Rol
Usuario.belongsTo(Rol, {
  foreignKey: 'rol_id',
  as: 'rol'
});
Rol.hasMany(Usuario, {
  foreignKey: 'rol_id',
  as: 'usuarios'
});

module.exports = Usuario;