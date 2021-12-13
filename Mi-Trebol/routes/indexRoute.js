var express = require('express');
var router = express.Router();

let indexController = require('../controllers/indexController');


/* GET home page. */
router.get('/', indexController.home);
router.get('/:id', indexController.home);
router.get('/indexVendedor/:id', indexController.vendedor);
router.get('/search',indexController.search );




module.exports = router;
