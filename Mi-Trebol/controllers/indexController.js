
const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../data/listaDeProductos.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const usersFilePath = path.join(__dirname, '../data/usersList.json');
const users = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));

let controlador = {
    home: (req, res) => {
        res.render('index.ejs', {products});

    },
    search: (req, res) => {
        res.send('Estado de busqueda');
    },
    vendedor: (req, res) => {
        let id = req.params.id;
        let user ;
        for(element of users){
            if (element.id == id){
                user = element;
                break;
            }
        }
        res.render('indexVendedor.ejs', {products, user});
    },
    
};

module.exports = controlador;   