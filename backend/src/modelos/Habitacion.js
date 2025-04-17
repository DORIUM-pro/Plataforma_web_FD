const { DataTypes } = require('sequelize');
const sequelize = require('../../configuracion/baseDeDatos');

/**
 * Modelo de Habitación/Alojamiento para la plataforma Glamping.
 */
const Habitacion = sequelize.define('Habitacion', {
  id: {
    type: DataTypes.INTEGER.UNSIGNED,
    autoIncrement: true,
    primaryKey: true
  },
  nombre: {
    type: DataTypes.STRING(50),
    allowNull: false,
    unique: true,
    comment: "Nombre o código de la habitación"
  },
  tipo: {
    type: DataTypes.STRING(50),
    allowNull: false,
    comment: "Ejemplo: carpa de lujo, geodomo, cabaña"
  },
  capacidad: {
    type: DataTypes.INTEGER.UNSIGNED,
    allowNull: false
  },
  estado: {
    type: DataTypes.ENUM('Disponible', 'Ocupada', 'En limpieza', 'En mantenimiento'),
    allowNull: false,
    defaultValue: 'Disponible'
  },
  descripcion: {
    type: DataTypes.STRING(255),
    allowNull: true
  }
}, {
  tableName: 'habitaciones',
  timestamps: false
});

module.exports = Habitacion;