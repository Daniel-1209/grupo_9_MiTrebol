const fs = require("fs");
const path = require("path");
const bcrypt = require("bcryptjs");
const { validationResult } = require("express-validator");

// Base de datos
const db = require('../database/models')

let user = null;

let controlador = {
  // Hacia la vista del login
  login: (req, res) => {
    user = null;
    res.render("./users/login.ejs", { user });
  },
  //Hacia el inicio despues de logearse
  begin: async (req, res) => {

    let users = await db.Users.findAll({include: [{association: 'myProducts'}, {association: 'ShoppingCar'} ]});

    for (element of users) {
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
    req.session.user = user.dataValues;
    // console.log('user: ');
    // console.log(user.dataValues);

    // Elije si es vendedor o comprador
    if (user.dataValues.id_category == 1) {
      res.redirect("/indexVendedor");
    } else {
      res.redirect("/");
    }
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
};

module.exports = controlador;
