var express = require('express');
var router = express.Router();

let indexController = require('../controllers/indexController');

/* GET home page. */
router.get('/', indexController.home);

router.get('/productDetail', indexController.productDetail);

router.get('/login', indexController.login);


module.exports = router;
