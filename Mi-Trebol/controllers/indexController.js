
const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../data/listaDeProductos.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const usersFilePath = path.join(__dirname, '../data/usersList.json');
const users = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));




let controlador = {
    home: (req, res) => {
        if ( req.session.user != undefined){
            let user = req.session.user;
            res.render('index.ejs', {products, user});
        }else{
            res.render('index.ejs', {products});
        }
        

    },
    search: (req, res) => {
        res.send('Estado de busqueda');
    },
    vendedor: (req, res) => {
        let user = req.session.user;
        console.log(user);
        res.render('indexVendedor.ejs', {products, user});
    },
    close: (req,res) => {
        req.session.user = undefined;
        res.redirect('/');
    }
    
    
};
//console.log(user);
module.exports = controlador;   
