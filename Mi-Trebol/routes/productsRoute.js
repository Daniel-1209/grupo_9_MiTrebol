
let express = require('express');
const { path } = require('path');
let router = express.Router();
let multer = require('multer');


let productsController = require('../controllers/productsController');

// Requiriendo middleawares
const noRegisterMiddleaware = require("../Middleaweares/noRegisterMiddleaware");


//Todos los productos
router.get('/', productsController.home);

// Detalle de los productos por id
router.get('/detail/:id', productsController.detail);

// Carrito de compras
router.get('/cart', productsController.car);
// Agregando un nuevo producto al carrito
router.post('/cart/:id',noRegisterMiddleaware, productsController.newCarProduct);
// Editar detalles del producto
router.get('/edit/:id', productsController.edit);
router.put('/edit/:id', productsController.edit);
// Eliminar archivos
router.delete('/edit/:id/eliminar', productsController.delete);


module.exports =  router;