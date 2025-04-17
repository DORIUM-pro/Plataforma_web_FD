const Reserva = require('../modelos/Reserva');
const Cliente = require('../modelos/Cliente');
const Habitacion = require('../modelos/Habitacion');
const { Op } = require('sequelize');
const { addDays, parseISO, differenceInCalendarDays, isAfter, isBefore } = require('date-fns');

// Listar todas las reservas, mostrando datos de cliente y habitación
exports.listarReservas = async (req, res) => {
  try {
    const reservas = await Reserva.findAll({
      include: [
        { model: Cliente, as: 'cliente' },
        { model: Habitacion, as: 'habitacion' }
      ]
    });
    res.json(reservas);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Crear nueva reserva con sugerencias de intervalos libres si hay traslape
exports.crearReserva = async (req, res) => {
  const { cliente_id, habitacion_id, fecha_inicio, fecha_fin, estado, precio_total } = req.body;
  try {
    // Buscar todas las reservas activas en el rango solicitado
    const reservasOcupadas = await Reserva.findAll({
      where: {
        habitacion_id,
        [Op.or]: [
          { fecha_inicio: { [Op.between]: [fecha_inicio, fecha_fin] } },
          { fecha_fin: { [Op.between]: [fecha_inicio, fecha_fin] } },
          {
            [Op.and]: [
              { fecha_inicio: { [Op.lte]: fecha_inicio } },
              { fecha_fin: { [Op.gte]: fecha_fin } }
            ]
          }
        ],
        estado: 'Activa'
      },
      order: [['fecha_inicio', 'ASC']],
      include: [
        { model: Habitacion, as: 'habitacion' }
      ]
    });

    if (reservasOcupadas && reservasOcupadas.length > 0) {
      // Transformamos las reservas ocupadas a [{desde, hasta}]
      const ocupados = reservasOcupadas.map(r => ({
        desde: r.fecha_inicio,
        hasta: r.fecha_fin
      })).sort((a, b) => new Date(a.desde) - new Date(b.desde));

      // Definimos el rango buscado y el tamaño estándar de sugerencia (3 días)
      const rangoUsuario = {
        inicio: parseISO(fecha_inicio),
        fin: parseISO(fecha_fin)
      };
      const diasSugerencia = 3;
      const sugerencias = [];

      // Empezamos desde el inicio del rango solicitado
      let cursor = rangoUsuario.inicio;

      for (const intervalo of ocupados) {
        const ocupadoDesde = parseISO(intervalo.desde);
        // Hay hueco entre cursor y ocupadoDesde
        if (isBefore(cursor, ocupadoDesde)) {
          let huecoEnDias = differenceInCalendarDays(ocupadoDesde, cursor);
          while (huecoEnDias >= diasSugerencia && sugerencias.length < 3) {
            const sugerido_hasta = addDays(cursor, diasSugerencia - 1);
            if (isAfter(sugerido_hasta, ocupadoDesde)) break;
            sugerencias.push({
              desde: cursor.toISOString().split('T')[0],
              hasta: sugerido_hasta.toISOString().split('T')[0],
              mensaje: `Puedes intentar reservar entre ${cursor.toISOString().split('T')[0]} y ${sugerido_hasta.toISOString().split('T')[0]}.`
            });
            // Pasamos el cursor al siguiente día
            cursor = addDays(cursor, 1);
            huecoEnDias = differenceInCalendarDays(ocupadoDesde, cursor);
          }
        }
        // Pasamos cursor al final del intervalo ocupado + 1 día
        cursor = addDays(parseISO(intervalo.hasta), 1);
        if (isAfter(cursor, rangoUsuario.fin)) break;
      }

      // Después de los ocupados, puede quedar hueco hasta fecha_fin
      if (isBefore(cursor, rangoUsuario.fin) && sugerencias.length < 3) {
        let huecoEnDias = differenceInCalendarDays(rangoUsuario.fin, cursor) + 1;
        while (huecoEnDias >= diasSugerencia && sugerencias.length < 3) {
          const sugerido_hasta = addDays(cursor, diasSugerencia - 1);
          if (isAfter(sugerido_hasta, rangoUsuario.fin)) break;
          sugerencias.push({
            desde: cursor.toISOString().split('T')[0],
            hasta: sugerido_hasta.toISOString().split('T')[0],
            mensaje: `Puedes intentar reservar entre ${cursor.toISOString().split('T')[0]} y ${sugerido_hasta.toISOString().split('T')[0]}.`
          });
          cursor = addDays(cursor, 1);
          huecoEnDias = differenceInCalendarDays(rangoUsuario.fin, cursor) + 1;
        }
      }

      return res.status(409).json({
        error: 'La habitación ya está reservada en ese rango de fechas.',
        detalle: {
          habitacion: reservasOcupadas[0].habitacion ? reservasOcupadas[0].habitacion.nombre : habitacion_id,
          fechas_ocupadas: ocupados,
          sugerencias_libres: sugerencias,
        }
      });
    }

    // Si disponible, crear la reserva como antes
    const reserva = await Reserva.create({ cliente_id, habitacion_id, fecha_inicio, fecha_fin, estado, precio_total });
    res.status(201).json(reserva);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Actualizar reserva por ID
exports.actualizarReserva = async (req, res) => {
  try {
    const reserva = await Reserva.findByPk(req.params.id);
    if (!reserva) return res.status(404).json({ error: 'Reserva no encontrada' });
    await reserva.update(req.body);
    res.json(reserva);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Eliminar reserva por ID
exports.eliminarReserva = async (req, res) => {
  try {
    const reserva = await Reserva.findByPk(req.params.id);
    if (!reserva) return res.status(404).json({ error: 'Reserva no encontrada' });
    await reserva.destroy();
    res.json({ mensaje: 'Reserva eliminada' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};