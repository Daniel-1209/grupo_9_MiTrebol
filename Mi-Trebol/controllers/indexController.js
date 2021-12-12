
const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../data/listaDeProductos.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

let controlador = {
    home: (req, res) => {
        res.render('index.ejs', {products});

    },
    search: (req, res) => {
        res.send('Esta es la busqueda');
    }
    
};

module.exports = controlador;   