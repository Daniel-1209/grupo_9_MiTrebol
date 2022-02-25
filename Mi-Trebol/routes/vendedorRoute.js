var express = require("express");
var router = express.Router();
const path = require("path");
let multer = require("multer");
const { check } = require("express-validator");

let indexController = require("../controllers/indexController");
let productsController = require("../controllers/productsController");

// Validaciones
const validateCreateUser = [
  check("title").notEmpty().withMessage("Ingresa un titulo a tu producto").isLength({min: 5}).withMessage('El titulo debe contener mínimo 5 caracteres'),
  check("shortdescription")
    .notEmpty()
    .withMessage("Ingresa una descripcion corta")
    .isLength({ min: 10 })
    .withMessage("La descripcion corta debe tener al menos 5 caracteres"),
  check("longDescription")
    .notEmpty()
    .withMessage("Ingresa una descripciono detallada")
    .isLength({ min: 20 })
    .withMessage("La descripcion larga debe tener al menos 15 caracteres"),
  check("classe").notEmpty().withMessage("Selecciona una clase de tu producto"),
  check("price").notEmpty().withMessage("Agrega el precio por pieza a tu producto").isLength({max: 6}).withMessage('El costo debe ser por pieza'),
  // check("productoImage").notEmpty().withMessage("Pon tu foto de perfil").bail(),
];

// Se crea el metodo para guardar los archivos de imagen con multer
// Configura la carpeta donde el server guardará las imagenes de los perfiles
let storage = multer.diskStorage({
  destination: (req, file, cb) => {
    let folder = path.join(__dirname, "../public/img");
    cb(null, folder);
  },
  filename: (req, file, cb) => {
    // Establece un nombre a las imagenes segun fecha en mili seg, agrega un string identificador y usa la extension del mismo archivo

    let imageProducto =
      "Producto-" + Date.now() + path.extname(file.originalname);
    cb(null, imageProducto);
  },
});

// Se crea la variable que saca la operacion de storange
let uploadFile = multer({ storage: storage });

// Inicio del vendedor
router.get("/", indexController.vendedor);

// Creacion de nuevos productos
router.get("/create", productsController.addProduct);
router.post(
  "/create",
  uploadFile.single("productoImage"),
  validateCreateUser,
  productsController.create
);

module.exports = router;
