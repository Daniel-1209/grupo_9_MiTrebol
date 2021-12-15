
let express = require('express');
let router = express.Router();

let productsController = require('../controllers/productsController');

//Todos los productos
router.get('/:iduser', productsController.home);

// Detalle de los productos por id
router.get('/detail/:id', productsController.detail);

// Carrito de compras
router.get('/cart', productsController.car);

// Editar detalles del producto
router.get('/edit/:id', productsController.edit)
router.put('/edit/:id', productsController.edit)

module.exports =  router;