const fs = require("fs");
const path = require("path");
const { validationResult } = require("express-validator");

const usersFilePath = path.join(__dirname, "../data/usersList.json");
const users = JSON.parse(fs.readFileSync(usersFilePath, "utf-8"));

// Importamos la base de datos que esta en la carpeta de modelos
const db = require('../database/models')


let controlador = {
    home: (req, res) => {
      let user = {
        id: req.params.iduser,
      };
      
      db.Products.findAll({
        // Incluimos  la asociacion
        include: [{association: 'imgs'}]
    })
      .then((data)=>{  
        
        res.render("./products/products.ejs", { products: data, user });

      }).catch((error) => {  
          res.send("Error");
      });
  
    },

    detail: async (req, res) => {
      let id = req.params.id;
      let user = req.session.user;
      if(user?.id_category === 1 ){
        user = await db.Users.findByPk(req.session.user.id,{include: [{association: 'myProducts'} ]});;
      } else if(user?.id_category === 2 ) {
        user = await db.Users.findByPk(req.session.user.id,{include: [{association: 'ShoppingCar'} ]});;
      }  
     
      let product = await db.Products.findByPk(id, { include: [{association: 'imgs'}] });
      let products = await db.Products.findAll({include: [{association: 'imgs'}]});

      // console.log(products)
      res.render("./products/productDetail.ejs", {
        product,
        products,
        user,
      });
      // console.log('user');
      // console.log(user);
    },
    // Vista del carrito de compras
    car: async (req, res) => {
      
      let user = await db.Users.findByPk(req.session.user.id,{include: [{association: 'ShoppingCar'} ]});;
      let list = user.ShoppingCar;

      res.render("./products/productCart.ejs", { list, user });
      //res.render ('./products/productCart.ejs', {list:shoppingList.car ,products});
    },
    newCarProduct: async (req, res) => {

      let {id} = req.session.user;
      //console.log(userNow);
       db.Cars.create({
        id_user: id,
        id_product: req.params.id
        });

      res.redirect("/products/cart");

    },
    // Eliminando un producto del carrito
    deleteCarProduct: async (req, res) => {

      let id = req.params.id;
      // console.log(id)
       db.Cars.destroy({
        where: {id_product: id}
        });

      res.redirect("/products/cart");

    },
    // Vista de crear producto
    addProduct: (req, res) => {

      let user = req.session.user;
      res.render("./products/addProduct.ejs", { user });

    },
    // Creacion del producto
    create: async (req, res) => {
      
      let user = req.session.user;

      let errors = validationResult(req);
      console.log(errors.array())

      if (!errors.isEmpty()) {
        res.render("./products/addProduct.ejs", {
          user,
          errors: errors.array(),
          old: req.body,
        });
      }else {
          let { title, shortdescription, longDescription,classe, price } = req.body;

          let product = await db.Products.create({
            name: title,
            price: price,
            raiting: 0,
            id_class: classe,
            shortdescription: shortdescription,
            longDescription: longDescription,
            purchases: 0,
            img_principal: req.file.filename
            });

      
            db.Images.create({
              id_product: product.id,
              name: req.file.filename
              });

            db.SellerProducts.create({
              id_user: user.id ,
              id_product: product.id
              });

    
      res.redirect("/products/detail/" +  product.id);
      }
      
      

    },
    // Editando un producto
    edit: async (req, res) => {
      let id = req.params.id;
      let user = req.session.user;
      let produtNow = await db.Products.findByPk(id, { include: [{association: 'imgs'}] });
      // console.log(produtNow);

      res.render("./products/editProduct.ejs", { produtNow, user });
    },
    // Metodo post de editar un producto
    update: (req, res) => {
  
      let id = req.params.id;
      let { title, shortdescription, longDescription,classe, price } = req.body;
      db.Products.update(
        {
            name: title,
            price: price,
            raiting: 0,
            id_class: classe,
            shortdescription: shortdescription,
            longDescription: longDescription,
            purchases: 0,
            img_principal: req.file.filename
        },
        {
          where: {id: id}
        });

        db.Images.destroy({
          where: { id_product: id }
          });

        db.Images.create({
          id_product: id,
          name: req.file.filename
          });
     
      res.redirect(`/products/detail/` + id);
    },
    delete: (req, res) => {
      // console.log('Delete complet');
      const id = req.params.id;

      db.Images.destroy({
        where: {id_product: id}
        });

      db.SellerProducts.destroy({
        where: {id_product: id}
        });

      db.Products.destroy({
        where: {id: id}
        });
      
      res.redirect("/indexVendedor");
      
    },
    notFound: (req, res, err) => {
      if (err) {
        res.status(400).send("Algo salió mal :(");
      }
      res.send(req.file);
    }
};

module.exports = controlador;
