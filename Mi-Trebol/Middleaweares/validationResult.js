const {check} = require('express-validator');

let validationResult =[
    check('email').notEmpty().isEmail().withMessage('Debes agregar un email valido'),
    check('password').notEmpty().isLength({min: 8}).withMessage('La contraseña es invalida'),
]
module.exports = validationResult;