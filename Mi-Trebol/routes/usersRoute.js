
let express = require('express');
let router = express.Router();

let userController = require('../controllers/userController');


// Loguearse en la cuenta
router.get('/login', userController.login);

// Registrarse por primera vez
router.get('/register', userController.register);

// Iniciarse
router.post('/register', userController.enter);


module.exports = router;