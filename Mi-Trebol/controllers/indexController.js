

let controlador = {
    home: (req, res) => {
        res.render('index.ejs');

    },
    productDetail: (req, res) => {
        res.render('./products/productDetail.ejs');
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