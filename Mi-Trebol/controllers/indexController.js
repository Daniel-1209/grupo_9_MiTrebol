

let controlador = {
    home: (req, res) => {
        res.render('index.ejs');

    },
    productDetail: (req, res) => {
        res.render('productDetail.ejs');
    },
    login: (req, res) => {
        res.render('./users/login.ejs')
    }
};

module.exports = controlador;   