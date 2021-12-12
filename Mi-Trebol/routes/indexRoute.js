var express = require('express');
var router = express.Router();

let indexController = require('../controllers/indexController');

/* GET home page. */
router.get('/', indexController.home);
router.get('/indexVendedor', indexController.vendedor);
router.get('/search',indexController.search );




module.exports = router;
