const { check } = require("express-validator");

module.exports = [
  check("user").notEmpty().withMessage("Ingresa un usuario"),
  check("firstName")
    .notEmpty()
    .withMessage("Ingresa tu nombre")
    .isLength({ min: 2 })
    .withMessage("El nombre debe tener mínimo 2 caracteres")
    .bail(),
  check("lastName").notEmpty().withMessage("Ingresa tus apellidos"),
  check("email").isEmail().withMessage("Ingresa un email valido"),
  check("password")
    .notEmpty()
    .withMessage("Ingresa una contraseña")
    .isStrongPassword()
    .withMessage(
      "La contraseña deve de tener al menos 1 numero, minuscula y caracter especial"
    ),
  check("password_confirmation")
    .notEmpty()
    .withMessage("Ingresa la misma contraseña")
    .custom((value, { req }) => {
      if (value != req.body.password) {
        throw new Error("Las contraseñas no coinciden");
      }
      return true;
    })
    .bail(),
  check("category").notEmpty().withMessage("Elije una categoria"),
  // check("avatar").notEmpty().withMessage("Pon tu foto de perfil").bail(),
];