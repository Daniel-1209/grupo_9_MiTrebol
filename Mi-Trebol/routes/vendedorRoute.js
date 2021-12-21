
var express = require('express');
var router = express.Router();

let indexController = require('../controllers/indexController');
let productsController = require('../controllers/productsController');

// Inicio del vendedor
router.get('/', indexController.vendedor);
// Creacion de nuevos productos
router.get ('/create', productsController.addProduct);
router.post('/create', productsController.create );


module.exports = router;