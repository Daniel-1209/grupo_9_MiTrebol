const { check } = require("express-validator");
const path = require("path");

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
    .bail(),
  check("productoImage").custom((value, { req }) => {
    let file = req.file;
    // console.log(file, value);
    let acceptedExtentions = [".jpg", ".jpeg", ".png", ".gif"];

    if (!file) {
      throw new Error("Tienes que subir una imagen");
    } else {
      let fileExtension = path.extname(file.originalname);
      let fileSize = file.size;
      if (!acceptedExtentions.includes(fileExtension)) {
        throw new Error(
          `Las extenciones permitidas son ${acceptedExtentions.join(",")}`
        );
      }
      
      if (fileSize > 5000000) {
        throw new Error(`Imagen muy pesada`);
      }
    }

    return true;
  }),
];
