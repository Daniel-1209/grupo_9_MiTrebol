var express = require('express');
var router = express.Router();

let indexController = require('../../controllers/APIS/productsApiController');


/* Todos los productos. */
router.get('/', indexController.all);

/* Buscar los productos. */
router.get('/search', indexController.search);


/* Detalle por cada producto. */
router.get('/detail/:id', indexController.detail);

module.exports = router;
