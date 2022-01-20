var express = require('express');
var router = express.Router();

let indexController = require('../controllers/indexController');


/* GET home page. */
router.get('/', indexController.home);
//router.get('/:iduser', indexController.homeid);
router.get('/search',indexController.search );

router.post('/close',indexController.close );



module.exports = router;
