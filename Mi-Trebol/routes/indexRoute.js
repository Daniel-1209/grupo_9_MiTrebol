var express = require('express');
var router = express.Router();

let indexController = require('../controllers/indexController');

/* GET home page. */
router.get('/', indexController.home);

router.get('/indexVendedor', indexController.indexVendedor);

router.get('/productDetail/:id', indexController.productDetail);

router.get('/login', indexController.login);

router.get('/register', indexController.register);

router.get('/productCart', indexController.car);

module.exports = router;
