// Base de datos
const db = require("../../database/models");

let controlador = {
  // Todos los usuarios
  all: async (req, res) => {
    db.Users.findAll().then((users) => {
      res.json(users);
    });
  },
  electronic: (req, res) => {
    console.log(req.query.email);
    db.Users.findAll({
      where: {
        email: req.query.email,
      },
    }).then((data) => {
      let respuesta = {
        meta: {
          status: 200,
          url: "api/actors",
        },
        data: data,
      };
      res.json(respuesta);
    });
  },
};

module.exports = controlador;
