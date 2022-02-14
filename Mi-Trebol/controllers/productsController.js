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
      console.log('user');
      console.log(user);
    },
    car: (req, res) => {
      let list;
      let userNow = req.session.user;
      // Cada que se escribe algo en el archivo json se reinicioa el usuario
      //console.log(userNow);
      for (carr of shoppingList) {
        if (carr.id == userNow.id) {
          list = carr.car;

          break;
        }
      }
      //

      res.render("./products/productCart.ejs", { list, user: userNow, products });
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
    create: (req, res) => {
      // var imagesProductUser = req.files; //files para varios archivos
      let user = req.session.user;
      console.log('req.session.user');

      let errors = validationResult(req);
      console.log(errors.array())
      if (!errors.isEmpty()) {
        res.render("./products/addProduct.ejs", {
          user,
          errors: errors.array(),
          old: req.body,
        });
      }

      var newProduct = {
        id: Date.now(),
        ...req.body,
        imgs: [req.file.filename],
        ratings: 0,
      };

      //console.log(userNow);
      for (userNow of users) {
        if (userNow.id == user.id) {
          userNow.myProducts.push(newProduct.id);
          break;
        }
      }

      //console.log('newProduct:');
      //console.log(newProduct);

      products.push(newProduct);
      fs.writeFileSync(productsFilePath, JSON.stringify(products, null, " "));
      fs.writeFileSync(usersFilePath, JSON.stringify(users, null, ""));
      res.redirect("/products/detail/" + newProduct.id);
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
