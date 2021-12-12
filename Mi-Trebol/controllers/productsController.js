const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../data/listaDeProductos.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const carFilePath = path.join(__dirname, '../data/miCarrito.json');
const shoppingList = JSON.parse(fs.readFileSync(carFilePath, 'utf-8'));

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

let controlador = {
   
    detail: (req, res) => {
        let id = req.params.id;
        res.render('./products/productDetail.ejs', {product: products[id], products} );
    },
    car: (req, res) => {
        res.render ('./products/productCart.ejs', {shoppingList,products});
    },

    addProduct: (req, res) => {
        res.render('./addProduct.ejs');
    }
};

module.exports = controlador;   