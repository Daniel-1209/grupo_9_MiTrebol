
let products = require('./products');

let controlador = {
    home: (req, res) => {
        res.render('index.ejs', {products: products});

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
        res.render ('./products/productCart.ejs');
    }
};

module.exports = controlador;   