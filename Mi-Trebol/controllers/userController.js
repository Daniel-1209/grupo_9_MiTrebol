const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../data/usersList.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

let controlador = {
    
    login: (req, res) => {
        res.render('./users/login.ejs')
    },

    register: (req, res) => {
        res.render('./users/register.ejs')
    }
}

module.exports = controlador;   