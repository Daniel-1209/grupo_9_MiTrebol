
let express = require('express');
let router = express.Router();

let productsController = require('../controllers/productsController');



router.get('/detail/:id', productsController.detail);

router.get('/cart', productsController.car);