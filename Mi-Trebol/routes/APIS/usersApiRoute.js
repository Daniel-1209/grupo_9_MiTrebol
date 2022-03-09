var express = require('express');
var router = express.Router();

let indexController = require('../../controllers/APIS/usersApiController');


/* Todos los usuarios. */
router.get('/', indexController.all);

/* Correo electronico de usuario */
router.get('/email', indexController.electronic);


module.exports = router;
