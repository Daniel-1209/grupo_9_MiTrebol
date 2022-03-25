var express = require('express');
var router = express.Router();

let indexController = require('../../controllers/APIS/productsApiController');


/* Todos los productos. */
router.get('/', indexController.all);

/* Detalle por cada producto. */
router.get('/:id', indexController.detail);

module.exports = router;
