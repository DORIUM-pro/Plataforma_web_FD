const { body, validationResult } = require('express-validator');

/**
 * Reglas de validación para creación de reservas.
 */
const validarCreacionReserva = [
  body('cliente_id')
    .notEmpty().withMessage('El cliente es obligatorio')
    .isInt({ min: 1 }).withMessage('El ID de cliente debe ser numérico y válido'),
  body('habitacion_id')
    .notEmpty().withMessage('La habitación es obligatoria')
    .isInt({ min: 1 }).withMessage('El ID de habitación debe ser numérico y válido'),
  body('fecha_inicio')
    .notEmpty().withMessage('La fecha de inicio es obligatoria')
    .isISO8601().withMessage('La fecha de inicio debe tener formato YYYY-MM-DD'),
  body('fecha_fin')
    .notEmpty().withMessage('La fecha de fin es obligatoria')
    .isISO8601().withMessage('La fecha de fin debe tener formato YYYY-MM-DD')
    .custom((value, { req }) => {
      if (value <= req.body.fecha_inicio) {
        throw new Error('La fecha de fin debe ser posterior a la de inicio');
      }
      return true;
    }),
  body('precio_total')
    .notEmpty().withMessage('El precio es obligatorio')
    .isFloat({ min: 0 }).withMessage('El precio debe ser positivo'),
  // Resultado de validación
  (req, res, next) => {
    const errores = validationResult(req);
    if (!errores.isEmpty()) {
      return res.status(422).json({ errores: errores.array() });
    }
    next();
  }
];

module.exports = {
  validarCreacionReserva
};