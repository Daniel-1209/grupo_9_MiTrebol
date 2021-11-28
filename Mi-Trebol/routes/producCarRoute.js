var express = require('express');
var router = express.Router();

let producCarController = require('../controllers/producCarController');

/* GET home page. */
router.get('/', producCarController.home);

module.exports = router;
