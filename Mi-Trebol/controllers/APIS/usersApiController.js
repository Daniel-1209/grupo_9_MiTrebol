// Base de datos
const db = require("../../database/models");

let controlador = {
  // Todos los usuarios
  all: (req, res) => {
    db.Users.findAll().then((users) => {
      res.json(users);
    });
  },
  electronic: (req, res) => {
    // console.log(req.query.email);
    db.Users.findAll({
      where: {
        email: req.query.email,
      },
    }).then((data) => {
      if (data.length !== 0) {
        res.json(true);
      } else {
        res.json(false);
      }
    });
  },
};

module.exports = controlador;
