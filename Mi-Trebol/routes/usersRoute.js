let express = require("express");
let router = express.Router();
var path = require("path");
var multer = require("multer");
const { check } = require("express-validator");

let userController = require("../controllers/userController");

// Validacion de imgen


// let restLogo = typeof req.files['rest_logo'] !== "undefined" ? req.files['rest_logo'][0].filename : '';

// Validaciones
const validateCreateUser = [
    check("user").notEmpty().withMessage("Ingresa un usuario").bail(),
    check("firstName").notEmpty().withMessage("Ingresa tu nombre").isLength({min: 2}).withMessage('El nombre debe tener mínimo 2 caracteres').bail(),
    check("lastName").notEmpty().withMessage("Ingresa tus apellidos").bail(),
    check("email").isEmail().withMessage("Ingresa un email valido").bail(),
    check("password").notEmpty().withMessage("Ingresa una contraseña").bail(),
    check("password_confirmation")
    .notEmpty()
    .withMessage("Ingresa la misma contraseña")
    .bail(),
    check("category").notEmpty().withMessage("Elije una categoria").bail(),
    // check("avatar").notEmpty().withMessage("Pon tu foto de perfil").bail(),
];

// Configura la carpeta donde el server guardará las imagenes de los perfiles
let storage = multer.diskStorage({
  destination: (req, file, cb) => {
    let folder = path.join(__dirname, "../public/img/avatars");
    cb(null, folder);
  },
  filename: (req, file, cb) => {
    // Establece un nombre a las imagenes segun fecha en mili seg, agrega un string identificador y usa la extension del mismo archivo

    let nameAvatar = "Avatar-" + Date.now() + path.extname(file.originalname);
    cb(null, nameAvatar);
  },
});

//Guarda la configuracion previa la const storage  para poder ser usada como middleware
let uploadFile = multer({ storage: storage });

// Requiriendo middleawares
const yesRegisterMiddleaware = require("../Middleaweares/yesRegisterMiddleaware");

// Ir a la vista de iniciar sesion en la cuenta
router.get(
  "/login",
  [
    check("email")
      .notEmpty()
      .isEmail()
      .withMessage("Introduzca un email valido"),
    check("password").notEmpty().isLength({ min: 8 }),
  ],
  yesRegisterMiddleaware,
  userController.login
);

// Iniciar sesion en la cuenta
router.post("/login", userController.begin);
// Registrarse por primera vez
router.get("/register", userController.register);
//Ruta de error
//router.post('/register', uploadFile.single('avatar'), userController.error);
// Iniciarse
router.post(
  "/register",
  uploadFile.single("avatar"),
  validateCreateUser,
  userController.enter
);

module.exports = router;
