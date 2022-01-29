const fs = require("fs");
const path = require("path");
const bcrypt = require("bcryptjs");
const { validationResult } = require("express-validator");

const productsFilePath = path.join(__dirname, "../data/usersList.json");
const products = JSON.parse(fs.readFileSync(productsFilePath, "utf-8"));

const usersFilePath = path.join(__dirname, "../data/usersList.json");
const users = JSON.parse(fs.readFileSync(usersFilePath, "utf-8"));

var User = require("../models/User");

const toThousand = (n) => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
let user = null;

let controlador = {
  // Hacia la vista del login
  login: (req, res) => {
    user = null;
    res.render("./users/login.ejs", { user });
  },
  //Hacia el inicio despues de logearse
  begin: (req, res) => {
    for (element of users) {
      //console.log(bcrypt.compareSync(element.password,user.password ));
      if (
        element.email === req.body.email &&
        bcrypt.compareSync(req.body.password, element.password)
      ) {
        user = element;
        //yes = true;
        break;
      }
    }
    if (user == undefined) {
      return res.render("./users/login.ejs", {
        errors: [{ msg: "Datos Invalidos" }],
      });
    }
    req.session.user = user;
    // Elije si es vendedor o comprador
    if (user.category == "Vendedor") {
      res.redirect("/indexVendedor");
    } else {
      res.redirect("/");
    }
    // }
    //else {
    res.redirect("/users/login");
    //return res.render('login', {errors: errors.errors});
    //}
  },

  // Hacia las vista del registro
  register: (req, res) => {
    user = null;
    res.render("./users/register.ejs", { user });
  },
  // Hacia el inicion una vez registrada la persona
  enter: (req, res) => {
    let errors = validationResult(req);
    // console.log(errors.array())
    if (!errors.isEmpty()) {
      res.render("./users/register.ejs", {
        user,
        errors: errors.array(),
        old: req.body,
      });
    } else {
      if (req.body.category == "Comprador") {
        user = {
          id: users.length + 1,
          ...req.body,
          //password: passHasheada ,   //guarda la contraseña hasheada
          imgs: req.file.filename,
          car: [],
        };
        let passHasheada = bcrypt.hashSync(req.body.password, 10);
        user.password = passHasheada;
        user.password_confirmation = passHasheada;
      } else {
        let passHasheada = bcrypt.hashSync(req.body.password, 10);

        user = {
          id: users.length + 1,
          ...req.body,
          imgs: req.file.filename, //'Profile' //agregar imagen del perfil
          myProducts: [],
        };
        user.password = passHasheada;
        user.password_confirmation = passHasheada;
      }

      users.push(user);
      fs.writeFileSync(usersFilePath, JSON.stringify(users, null, " "));

      res.redirect("/users/login");
    }
  },
  //error: (req, res, next) => {
  //  const file = req.file
  //if(!file){
  //  const error = new Error ('Por favor selecciona un archivo')
  //error.httpStatusCode = 400
  //return next(error)
  //}
  //else {
  //  user = null;
  //res.send('error');
  //}
  //}
};

module.exports = controlador;
