
let express = require('express');
let router = express.Router();
var path = require('path');
var multer = require('multer');

let userController = require('../controllers/userController');

// Configura la carpeta donde el server guardará las imagenes de los perfiles
var storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, '../public/img/avatars')
    },
    filename:(req, file, cb) => {
        // Establece un nombre a las imagenes segun fecha en mili seg, agrega un string identificador y usa la extension del mismo archivo
        cb(null, `${Date.now()}_img_${path.extname(file.originalname)}`)  
    }
});

//Guarda la configuracion previa la const storage  para poder ser usada como middleware
var uploadFile = multer({storage: storage});

// Ir a la vista de iniciar sesion en la cuenta
router.get('/login', userController.login);

// Iniciar sesion en la cuenta
router.post('/login', userController.begin);
// Registrarse por primera vez
router.get('/register', userController.register);

// Iniciarse
router.post('/register', uploadFile.single('avatar'), userController.enter);


module.exports = router;