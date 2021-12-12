
let express = require('express');
let router = express.Router();

let userController = require('../controllers/userController');



router.get('/login', userController.login);

router.get('/register', userController.register);


module.exports = router;