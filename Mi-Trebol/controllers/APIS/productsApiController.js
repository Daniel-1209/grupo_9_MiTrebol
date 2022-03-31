// Base de datos
const db = require("../../database/models");

let controlador = {
  // Todos los Productos
  all: (req, res) => {
    db.Products.findAll().then((data) => {
      const products = [];
      const ByCategory = {
        Jabon: 0,
        Belleza: 0,
        Semillas: 0,
        Artesanias: 0,
        Velas: 0,
      };

      data.forEach((element) => {
        const product = {
          id: element.id,
          name: element.name,
          description: element.shortdescription,
          category: element.id_class,
          price: element.price,
          img: element.img_principal,
          detail: `/api/products/${element.id}`,
        };
        products.push(product);

        if (element.id_class === 1) {
          ByCategory.Jabon += 1;
        } else if (element.id_class === 2) {
          ByCategory.Belleza += 1;
        } else if (element.id_class === 3) {
          ByCategory.Semillas += 1;
        } else if (element.id_class === 4) {
          ByCategory.Artesanias += 1;
        } else if (element.id_class === 5) {
          ByCategory.Velas += 1;
        }
      });

      res.json({
        count: data.length,
        countByCategory: ByCategory,
        status: 200,
        products: products,
      });
    });
  },
  // Detalle de cada producto
  detail: (req, res) => {
    const id = req.params.id;
    db.Products.findByPk(id, {
      include: [{ association: "imgs" }],
    }).then((data) => {
      res.json({
        status: 200,
        product: data,
      });
    });
  },
  // Buscar los Productos
  search: (req, res) => {
    db.Products.findAll({
      where: {
        name: {
          [db.Sequelize.Op.like]: `%${req.query.text}%`,
        }
      },
    }).then((data) => {
      console.log(data);
      const products = [];
      data.forEach((product) => {
        const productIni = {
          title: product.name,
          description: product.shortdescription,
          imgUrl: `http://localhost:3000/img/${product.img_principal}`,
        };
        products.push(productIni);
      });

      res.json({
        status: 200,
        products: products,
      });
    });
  },
};

module.exports = controlador;
