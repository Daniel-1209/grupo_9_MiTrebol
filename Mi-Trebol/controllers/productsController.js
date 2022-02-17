const fs = require("fs");
const path = require("path");
const { validationResult } = require("express-validator");

const productsFilePath = path.join(__dirname, "../data/listaDeProductos.json");
//const products = JSON.parse(fs.readFileSync(productsFilePath, "utf-8"));

const carFilePath = path.join(__dirname, "../data/usersList.json");
const shoppingList = JSON.parse(fs.readFileSync(carFilePath, "utf-8"));

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
      let product = await db.Products.findByPk(id, { include: [{association: 'imgs'}] });
      let products = await db.Products.findAll({include: [{association: 'imgs'}]});

      console.log(products)
      res.render("./products/productDetail.ejs", {
        product,
        products,
        user,
      });
      // console.log('user');
      // console.log(user);
    },
    car: (req, res) => {
      let list = req.session.user.ShoppingCar;
      let user = req.session.user;

      res.render("./products/productCart.ejs", { list, user });
      //res.render ('./products/productCart.ejs', {list:shoppingList.car ,products});
    },
    newCarProduct: (req, res) => {
      let userNow = req.session.user;
      //console.log(userNow);
      for (user of users) {
        if (userNow.id == user.id) {
          let index = parseInt(req.params.id);
          user.car.push(index);
          break;
        }
      }

      fs.writeFileSync(usersFilePath, JSON.stringify(users, null, ""));
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
    error: (req, res, next) => {
      const file = req.file;
      if (!file) {
        const error = new Error("Por favor selecciona un archivo");
        error.httpStatusCode = 400;
        return next(error);
      }

      let user = req.session.user;
      res.render("./products/addProduct.ejs", { user });
    },
    edit: (req, res) => {
      let id = req.params.id;
      let produtNow;
      let user = req.session.user;
      for (element of products) {
        if (element.id == id) {
          produtNow = element;
        }
      }
      // console.log(produtNow);

      res.render("./products/editProduct.ejs", { produtNow, user });
    },
    update: (req, res) => {
      let newProduct = {
        id: parseInt(req.params.id),
        ...req.body,
        imgs: [req.file.filename],
      };
      console.log(newProduct);
      for (let i = 0; i < products.length; i++) {
        if (products[i].id == newProduct.id) {
          products[i] = newProduct;
        }
      }

      fs.writeFileSync(productsFilePath, JSON.stringify(products, null, " "));
      res.redirect(`/products/detail/` + newProduct.id);
    },
    delete: (req, res) => {
      // console.log('Delete complet');
      const id = req.params.id;
      let newProducts = products.filter((product) => {
        return product.id != id;
      });
      // console.log(newProducts, id);

      fs.writeFileSync(productsFilePath, JSON.stringify(newProducts, null, " "));
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
