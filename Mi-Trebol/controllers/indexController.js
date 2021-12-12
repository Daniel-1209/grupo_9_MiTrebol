
const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../data/listaDeProductos.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));


let controlador = {
    home: (req, res) => {
        res.render('index.ejs', {products});

    },
    search: (req, res) => {
        res.send('Estado de busqueda');
    },
    vendedor: (req, res) => {
        res.render('indexVendedor.ejs', {products});
    },
    
};

module.exports = controlador;   