
var express = require('express');
var router = express.Router();

let indexController = require('../controllers/indexController');
let productsController = require('../controllers/productsController');

// Inicio del vendedor
router.get('/:id', indexController.vendedor);
// Creacion de nuevos productos
router.get ('/:id/create', productsController.addProduct);
router.post('/:id/create', productsController.create );


module.exports = router;