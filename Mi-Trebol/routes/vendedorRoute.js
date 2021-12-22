
var express = require('express');
var router = express.Router();
const path = require('path');
let multer = require('multer');

let indexController = require('../controllers/indexController');
let productsController = require('../controllers/productsController');


// Se crea el metodo para guardar los archivos de imagen con multer
// Configura la carpeta donde el server guardará las imagenes de los perfiles
let storage = multer.diskStorage({
    destination: (req, file, cb) => {
        let folder = path.join(__dirname,'../public/img' )
        cb(null, folder);
    },
    filename:(req, file, cb) => {
        // Establece un nombre a las imagenes segun fecha en mili seg, agrega un string identificador y usa la extension del mismo archivo
        
        let nameAvatar = 'Product-' + Date.now()+ path.extname(file.originalname);
        cb(null, nameAvatar) ; 
    }
});


// Se crea la variable que saca la operacion de storange

let uploadFile = multer({storage: storage});




// Inicio del vendedor
router.get('/', indexController.vendedor);
// Creacion de nuevos productos
router.get('/create', productsController.addProduct);
router.post('/create', uploadFile.single('image') ,productsController.create);
//uploadFile2.array('imagen')

module.exports = router;