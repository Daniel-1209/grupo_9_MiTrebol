
const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../data/listaDeProductos.json');
//const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const usersFilePath = path.join(__dirname, '../data/usersList.json');
//const users = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));



// Importamos la base de datos que esta en la carpeta de modelos
const db = require('../database/models')



let controlador = {
    home: (req, res) => {
           
        if ( req.session.user != undefined){
            let user = req.session.user;
            db.Products.findAll({
                // Incluimos  la asociacion
                include: [{association: 'imgs'}]
            })
                .then((products)=>{

                    res.render('index.ejs', {products , user});
               
                }).catch((error) => {  
                    res.send("Error");
                });

           
        }else{
            
            db.Products.findAll({
                // Incluimos  la asociacion
                include: [{association: 'imgs'}]
            })
                .then((products)=>{

                    res.render('index.ejs', {products });
               
                }).catch((error) => {  
                    res.send("Error");
                });
        }
        

    },
    search: (req, res) => {
        res.send('Estado de busqueda');
    },
    vendedor: async (req, res) => {
        let products = await db.Products.findAll({include: [{association: 'imgs'}]});
        let user = req.session.user;
      
        
        // console.log(user);
        let myProducts = [];
        
        for (let i = 0 ; i< user.myProducts.length; i++) {
            for(let j = 0; j < products.length; j++) {
                if( user.myProducts[i].id_product === products[j].id){
                    myProducts.push(products[j]);
                    break;
                }
            }
        }
        
       
        // console.log(myProducts);
        res.render('indexVendedor.ejs', {products : myProducts, user});
    },
    close: (req,res) => {
        req.session.user = undefined;
        res.redirect('/');
    }
    
    
};
//console.log(user);
module.exports = controlador;   
