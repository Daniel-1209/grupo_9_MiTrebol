
let products = require('./products');
let shoppingList = require('./compras');

let controlador = {
    home: (req, res) => {
        res.render('index.ejs', {products: products});

    },
    indexVendedor: (req, res) => {
        res.render('indexVendedor.ejs', {products: products});

    },
    productDetail: (req, res) => {
        let id = req.params.id;
        res.render('./products/productDetail.ejs', {product: products[id], products} );
    },
    login: (req, res) => {
        res.render('./users/login.ejs')
    },

    register: (req, res) => {
        res.render('./users/register.ejs')
    },

    car: (req, res) => {
        res.render ('./products/productCart.ejs', {shoppingList,products});
    },

    addProduct: (req, res) => {
        res.render('./addProduct.ejs');
    },
};

module.exports = controlador;   