const { body, validationResult } = require('express-validator');

/**
 * Reglas de validación para creación de usuarios.
 */
const validarCreacionUsuario = [
  body('nombre')
    .notEmpty().withMessage('El nombre es obligatorio')
    .isLength({ max: 100 }).withMessage('El nombre es muy largo'),
  body('correo_electronico')
    .notEmpty().withMessage('El correo electrónico es obligatorio')
    .isEmail().withMessage('Debe ser un correo electrónico válido')
    .isLength({ max: 100 }).withMessage('El correo es muy largo'),
  body('contrasena')
    .notEmpty().withMessage('La contraseña es obligatoria')
    .isLength({ min: 6 }).withMessage('La contraseña debe tener al menos 6 caracteres'),
  body('rol_id')
    .notEmpty().withMessage('El rol es obligatorio')
    .isInt({ min: 1 }).withMessage('El rol debe ser numérico y válido'),
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
  validarCreacionUsuario
};