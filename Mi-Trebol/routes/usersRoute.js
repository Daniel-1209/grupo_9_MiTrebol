
let express = require('express');
let router = express.Router();
var path = require('path');
var multer = require('multer');

let userController = require('../controllers/userController');

// Configura la carpeta donde el server guardará las imagenes de los perfiles
let storage = multer.diskStorage({
    destination: (req, file, cb) => {
        let folder = path.join(__dirname,'../public/img/avatars' )
        cb(null, folder);
    },
    filename:(req, file, cb) => {
        // Establece un nombre a las imagenes segun fecha en mili seg, agrega un string identificador y usa la extension del mismo archivo
        
        let nameAvatar = 'Avatar-' + Date.now()+ path.extname(file.originalname);
        cb(null, nameAvatar) ; 
    }
});

//Guarda la configuracion previa la const storage  para poder ser usada como middleware
let uploadFile = multer({storage: storage});

// Requiriendo middleawares
const yesRegisterMiddleaware = require("../Middleaweares/yesRegisterMiddleaware");

// Ir a la vista de iniciar sesion en la cuenta
router.get('/login',yesRegisterMiddleaware, userController.login);

// Iniciar sesion en la cuenta
router.post('/login', userController.begin);
// Registrarse por primera vez
router.get('/register', userController.register);
//Ruta de error
//router.post('/register', uploadFile.single('avatar'), userController.error);
// Iniciarse
router.post('/register', uploadFile.single('avatar'), userController.enter);


module.exports = router;