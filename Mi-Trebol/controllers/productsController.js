const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../data/listaDeProductos.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const carFilePath = path.join(__dirname, '../data/usersList.json');
const shoppingList = JSON.parse(fs.readFileSync(carFilePath, 'utf-8'));


let controlador = {
    home: (req,res) => {
        res.render('./products/products.ejs', {products});
    },
   
    detail: (req, res) => {
        let id = req.params.id;
        res.render('./products/productDetail.ejs', {product: products[id], products} );
    },
    car: (req, res) => {
        let list =shoppingList.car
        res.send(shoppingList);
        //res.render ('./products/productCart.ejs', {list:shoppingList.car ,products});
    },

    addProduct: (req, res) => {
        res.render('./products/addProduct.ejs');
    },
    create: (req, res) => {
        let newProduct ={
            id: products.length,
            ...req.body,
            imgs: ["none"]
        };
        
        products.push(newProduct);
		fs.writeFileSync(productsFilePath, JSON.stringify(products, null, ' '));


        res.redirect(`/products/detail/`+ newProduct.id);
    },
    edit: (req, res) => {
        res.reder('/products/')
    },
    update: (req, res) => {
        let newProduct ={
            id: req.params.id,
            ...req.body,
            imgs: ["none"]
        };
        
        for( element of products){
            if ( element.id == newProduct.id){
                element = newProduct;
            }
        }
        
		fs.writeFileSync(productsFilePath, JSON.stringify(products, null, ' '));


        res.redirect(`/products/detail/`+ newProduct.id);
    },
};

module.exports = controlador;   