
var express = require('express');
var router = express.Router();
const path = require('path');
const multer = require('multer');

let indexController = require('../controllers/indexController');
let productsController = require('../controllers/productsController');


// Config. para guardar imagenes de produtos
const storage2 = multer.diskStorage({
    destination2: (req, file, cb) => {
        cb(null, '../public/img');
    },
    filename2:(req, file, cb) => {
        // Establece un nombre a las imagenes de acuerdo a la fecha dada en mili seg, agrega un string identificador de img y usa la extension del mismo archivo
        cb(null, `${Date.now()}_imgProducto_${path.extname(file.originalname)}`);  
    }
})

//Guarda la configuracion previa la const storage  para poder ser usada como middleware
const uploadFile2 = multer({storage2});


// Inicio del vendedor
router.get('/', indexController.vendedor);
// Creacion de nuevos productos
router.get('/create', productsController.addProduct);
router.post('/create', productsController.create);
//uploadFile2.array('imagen')

module.exports = router;