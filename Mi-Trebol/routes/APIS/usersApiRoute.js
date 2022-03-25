var express = require('express');
var router = express.Router();

let indexController = require('../../controllers/APIS/usersApiController');


/* Todos los usuarios. */
router.get('/', indexController.all);

/* Detalle por cada usuario. */
router.get('/:id', indexController.detail);

/* Correo electronico de usuario */
router.get('/email', indexController.electronic);


module.exports = router;
