const { check } = require("express-validator");
module.exports = [
  check("title")
    .not()
    .isEmpty()
    .withMessage("Ingresa un titulo a tu producto")
    .isLength({ min: 5 })
    .withMessage("El titulo debe contener mínimo 5 caracteres")
    .bail(),
  check("shortdescription")
    .not()
    .isEmpty()
    .withMessage("Ingresa una descripcion corta")
    .isLength({ min: 10 })
    .withMessage("La descripcion corta debe tener al menos 5 caracteres")
    .bail(),
  check("longDescription")
    .not()
    .isEmpty()
    .withMessage("Ingresa una descripciono detallada")
    .isLength({ min: 20 })
    .withMessage("La descripcion larga debe tener al menos 20 caracteres")
    .bail(),
  check("classe")
    .notEmpty()
    .withMessage("Selecciona una clase de tu producto")
    .bail()
  // check("productoImage").notEmpty().withMessage("Pon tu foto de perfil").bail(),
];
