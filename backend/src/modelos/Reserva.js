const { DataTypes } = require('sequelize');
const sequelize = require('../../configuracion/baseDeDatos');
const Cliente = require('./Cliente');
const Habitacion = require('./Habitacion');

/**
 * Modelo de Reserva para la plataforma Glamping.
 */
const Reserva = sequelize.define('Reserva', {
  id: {
    type: DataTypes.INTEGER.UNSIGNED,
    autoIncrement: true,
    primaryKey: true
  },
  fecha_inicio: {
    type: DataTypes.DATEONLY,
    allowNull: false
  },
  fecha_fin: {
    type: DataTypes.DATEONLY,
    allowNull: false
  },
  estado: {
    type: DataTypes.ENUM('Activa', 'Cancelada', 'Finalizada'),
    allowNull: false,
    defaultValue: 'Activa'
  },
  precio_total: {
    type: DataTypes.DECIMAL(10,2),
    allowNull: false
  }
}, {
  tableName: 'reservas',
  timestamps: false
});

// Relaciones: Reserva pertenece a Cliente y a Habitación
Reserva.belongsTo(Cliente, {
  foreignKey: 'cliente_id',
  as: 'cliente'
});
Cliente.hasMany(Reserva, {
  foreignKey: 'cliente_id',
  as: 'reservas'
});

Reserva.belongsTo(Habitacion, {
  foreignKey: 'habitacion_id',
  as: 'habitacion'
});
Habitacion.hasMany(Reserva, {
  foreignKey: 'habitacion_id',
  as: 'reservas'
});

module.exports = Reserva;