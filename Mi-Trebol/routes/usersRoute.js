
let express = require('express');
let router = express.Router();

let userController = require('../controllers/userController');


// Ir a la vista de iniciar sesion en la cuenta
router.get('/login', userController.login);

// Iniciar sesion en la cuenta
router.post('/login', userController.begin);
// Registrarse por primera vez
router.get('/register', userController.register);

// Iniciarse
router.post('/register', userController.enter);


module.exports = router;