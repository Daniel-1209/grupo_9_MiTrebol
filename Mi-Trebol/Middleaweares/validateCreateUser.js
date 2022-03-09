const { check } = require("express-validator");
const path = require("path");
const fetch = require("node-fetch");

module.exports = [
  check("user").notEmpty().withMessage("Ingresa un usuario"),
  check("firstName")
    .notEmpty()
    .withMessage("Ingresa tu nombre")
    .isLength({ min: 2 })
    .withMessage("El nombre debe tener mínimo 2 caracteres")
    .bail(),
  check("lastName").notEmpty().withMessage("Ingresa tus apellidos"),
  check("email")
    .isEmail()
    .withMessage("Ingresa un email valido")
    .custom(async (value) => {
      let data = await fetch(
        `http://localhost:3000/api/users/email?email=${value}`
      );
        console.log(data,"Holllaaa")
      if (data) {
        throw new Error("Correo electronico ya registrado");
      }
      return true;
    }),
  check("password")
    .notEmpty()
    .withMessage("Ingresa una contraseña")
    .isStrongPassword()
    .withMessage(
      "La contraseña deve de tener al menos 1 numero,mayuscula, minuscula y caracter especial"
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
  check("avatar").custom((value, { req }) => {
    let file = req.file;
    let acceptedExtentions = [".jpg", ".jpeg", ".png"];

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
