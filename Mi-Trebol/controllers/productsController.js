const fs = require('fs');
const path = require('path');
const { off } = require('process');

const productsFilePath = path.join(__dirname, '../data/listaDeProductos.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const carFilePath = path.join(__dirname, '../data/usersList.json');
const shoppingList = JSON.parse(fs.readFileSync(carFilePath, 'utf-8'));

const usersFilePath = path.join(__dirname, '../data/usersList.json');
const users = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));



let controlador = {
    home: (req,res) => {
        let user = {
            id: req.params.iduser,
        }
        res.render('./products/products.ejs', {products, user});
    },
   
    detail: (req, res) => {
        let id = req.params.id;
        let user = req.session.user;
        res.render('./products/productDetail.ejs', {product: products[id], products, user});
        console.log(user);
    },
    car: (req, res) => {
        let list;
        let userNow =  req.session.user;
        // Cada que se escribe algo en el archivo json se reinicioa el usuario
        //console.log(userNow);
        for ( carr of shoppingList){
            if ( carr.id == userNow.id ){
               list =   carr.car ;
               
               break;
            }
        }
        //

        res.render('./products/productCart.ejs', {list, user:  userNow, products});
        //res.render ('./products/productCart.ejs', {list:shoppingList.car ,products});
    },
    newCarProduct: (req, res) => {
        let userNow = req.session.user;
        //console.log(userNow);
        for ( user of users){
            if ( userNow.id == user.id){
                let index = parseInt( req.params.id);
                user.car.push(index);
                
                break;
            }
        }

        fs.writeFileSync(usersFilePath, JSON.stringify(users, null, ''));
        res.redirect('/products/cart');
    },

    addProduct: (req, res) => {
        
        let user = req.session.user;
        
        res.render('./products/addProduct.ejs', {user});
    },
    create: (req, res) => {
        
        let imagesProductUser = req.files;
        if (imagesProductUser){
            var newProduct ={
                id: products.length,
                ...req.body,
                imgs: imagesProductUser,
                ratings: 0,
            };

            for(let i = 0; i <= imagesProductUser.length; i++){
                for(imageFile of imagesProductUser[i]){
                    var imageFile + i = imageFile;
                    var imageFileName[i] = imageFile[i].filename;
                    console.log(imageFileName);
                }

            };

           
    
            console.log('body:');
            console.log(req.body);
            console.log('newProduct:');
            console.log(newProduct); 

            products.push(newProduct);
            fs.writeFileSync(productsFilePath, JSON.stringify(products, null, ' '));
    
    
            res.redirect('/products/detail/' + newProduct.id);
        }
        else{
            
        let user = req.session.user;
        
        res.render('./products/addProduct.ejs', {user});
        }
        
    },
    edit: (req, res) => {
        res.render('./products/editProduct.ejs')
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