const { check } = require("express-validator");

module.exports = [
  check("email").notEmpty().isEmail().withMessage("Introduzca un email valido"),
  check("password").notEmpty().isLength({ min: 8 }),
];
