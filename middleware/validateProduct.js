const { body, validationResult } = require('express-validator');

exports.validateProduct = [
  body('name')
    .trim()
    .notEmpty()
    .withMessage('Product name is required'),

  body('price')
    .isFloat({ gt: 0 })
    .withMessage('Price must be greater than 0'),

  (req, res, next) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({
        success: false,
        errors: errors.array()
      });
    }

    next();
  }
];