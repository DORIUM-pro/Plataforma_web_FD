/**
 * Script para sincronizar los modelos Sequelize y poblar con datos de ejemplo.
 * Úsalo solo para pruebas/desarrollo, nunca en producción con force:true si tienes datos valiosos.
 */

const sequelize = require('../configuracion/baseDeDatos');
const Rol = require('./modelos/Rol');
const Usuario = require('./modelos/Usuario');
const Cliente = require('./modelos/Cliente');
const Habitacion = require('./modelos/Habitacion');
const Reserva = require('./modelos/Reserva');

async function main() {
  try {
    // Sincroniza todos los modelos. ¡CAUTELA con force:true, borra tablas!
    await sequelize.sync({ force: true });
    console.log('Tablas sincronizadas correctamente.');

    // Insertar datos de ejemplo para pruebas:
    const adminRol = await Rol.create({
      nombre: 'Administrador',
      permisos: ["GESTIONAR_RESERVAS", "VER_HABITACIONES", "CAMBIAR_ESTADO_HABITACION", "ALTA_EMPLEADOS", "VER_REPORTES"]
    });
    const limpiezaRol = await Rol.create({
      nombre: 'Limpieza',
      permisos: ["VER_HABITACIONES", "CAMBIAR_ESTADO_HABITACION"]
    });

    const adminUsuario = await Usuario.create({
      nombre: 'Juan Pérez',
      correo_electronico: 'admin@glamping.com',
      contrasena: 'hash_seguro123',
      rol_id: adminRol.id,
      estado_activo: true
    });

    const cliente1 = await Cliente.create({
      nombre: 'Ana Cliente',
      correo_electronico: 'ana@correo.com',
      telefono: '3112223344'
    });

    const habitacion1 = await Habitacion.create({
      nombre: 'Carpa Deluxe 1',
      tipo: 'carpa de lujo',
      capacidad: 2,
      estado: 'Disponible',
      descripcion: 'Carpa con jacuzzi y aire acondicionado.'
    });

    const reserva1 = await Reserva.create({
      cliente_id: cliente1.id,
      habitacion_id: habitacion1.id,
      fecha_inicio: '2024-05-10',
      fecha_fin: '2024-05-13',
      estado: 'Activa',
      precio_total: 125000
    });

    console.log('Datos de ejemplo insertados correctamente.');
  } catch (err) {
    console.error('Error sincronizando o insertando datos:', err);
  } finally {
    await sequelize.close();
    console.log('Conexión cerrada.');
  }
}

main();