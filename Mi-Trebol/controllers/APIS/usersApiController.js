// Base de datos
const db = require("../../database/models");

let controlador = {
  // Todos los usuarios
  all: (req, res) => {
    db.Users.findAll().then((data) => {
      const users = [];
      data.forEach((element) => {
        const user = {
          id: element.id,
          user: element.user,
          name: `${element.first_name} ${element.last_name}`,
          email: element.email,
          detail: `/api/users/${element.id}`,
        };
        users.push(user);
      });
      res.json({
        count: users.length,
        status: 200,
        users: users,
      });
    });
  },
  // Retornar si un email ya esta registrado
  electronic: (req, res) => {
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
  // Detalle de cada usuario
  detail: (req, res) => {
    const id = req.params.id;
    db.Users.findByPk(id).then((data) => {
      const user = {
        id: data.id,
        user: data.user,
        name: data.name,
        first_name: data.first_name,
        last_name: data.last_name,
        email: data.email,
        avatar: data.avatar
      };

      res.json({
        status: 200,
        user: user,
      });
    });
  },
  // Contador de los usuarios => Vendedores y Compradores
  countCategories: (req, res) => {
    db.Users.findAll().then((data) => {
      const usersBuyers = [];
      const usersVendors = [];
      let countBuyers = 0;
      let countVendors = 0;

      data.forEach((element) => {
        const user = {
          id: element.id,
          user: element.user,
          name: `${element.first_name} ${element.last_name}`,
          email: element.email,
          avatar: element.avatar,
          detail: `/api/users/${element.id}`,
        };
        if( element.id_category === 1    ){
          usersVendors.push(user);
          countVendors++ ;
        }else{
          usersBuyers.push(user);
          countBuyers++;
        }
        
      });
      res.json({
        countBuyers: countBuyers,
        countVendors: countVendors ,
        status: 200,
        usersBuyers: usersBuyers,
        countVendors: countVendors
      });
    });
  },
};

module.exports = controlador;
