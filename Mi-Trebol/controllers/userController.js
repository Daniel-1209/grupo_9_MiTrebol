const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../data/usersList.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));


const usersFilePath = path.join(__dirname, '../data/usersList.json');
const users = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));


const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

let controlador = {
    
    login: (req, res) => {
        res.render('./users/login.ejs')
    },

    register: (req, res) => {
        res.render('./users/register.ejs')
    },
    enter: (req, res) => {
        
        let user = {
            id : users.length,
            ...req.body,
        }
        if( user.category == 'Vendedor'){
            res.redirect('/indexVendedor/'+ user.id);
        }else{
            res.redirect('/'+ user.id);
        }
        
    }
}

module.exports = controlador;   