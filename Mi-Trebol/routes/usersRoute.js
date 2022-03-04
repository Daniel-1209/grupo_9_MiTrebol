let express = require("express");
let router = express.Router();
var path = require("path");
var multer = require("multer");

let userController = require("../controllers/userController");

// Requiriendo middleawares
const yesRegisterMiddleaware = require("../Middleaweares/yesRegisterMiddleaware");

// Validaciones Middleawares
const validateCreateUser = require("../Middleaweares/validateCreateUser");
const validateLoginUser = require("../Middleaweares/validateLoginUser");

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



// Ir a la vista de iniciar sesion en la cuenta
router.get(
  "/login",
  validateLoginUser,
  yesRegisterMiddleaware,
  userController.login
);

router.get(
  "/perfil",
  userController.profile
)

// Iniciar sesion en la cuenta
router.post("/login", userController.begin);

// Registrarse por primera vez
router.get("/register", userController.register);

// Iniciarse
router.post(
  "/register",
  uploadFile.single("avatar"),
  validateCreateUser,
  userController.enter
);

module.exports = router;
