import React, { useEffect, useState } from "react";

function LastMovieInDb() {
  const [products, setProducts] = useState({
    products: [
      {
        id: 1,
        name: "Aceite de Aguacate",
        description: "Producto 100% orgánico - 150ml",
        category: 2,
        price: "100.00",
        img: "calificacion.png",
        detail: "/api/products/1",
      },
    ],
  });
  const [users, setUsers] = useState({
    users: [
      {
        id: 1,
        user: "Dani23",
        avatar: 'Avatar-1643095211083.jpg',
        name: "Daniel Garcia",
        email: "algo@gmail.com",
        detail: "/api/users/1",
      },
    ],
  });

  useEffect(() => {
    fetch("/api/products")
      .then((data) => {
        return data.json();
      })
      .then((element) => setProducts(element));

    fetch("/api/users")
      .then((data) => {
        return data.json();
      })
      .then((element) => setUsers(element));
  }, []);

  console.log(users.users[users.users.length - 1].name);

  return (
    <div className="col-lg-6 mb-4">
      <div className="card shadow mb-4">
        <div className="card-header py-3">
          <h5 className="m-0 font-weight-bold text-gray-800">
            Ultimo Producto En la DB
          </h5>
        </div>
        <div className="card-body">
          <h3>{products.products[products.products.length - 1].name}</h3>
          <div className="text-center">
            <img
              className="img-fluid px-3 px-sm-4 mt-3 mb-4"
              style={{ width: 40 + "rem" }}
              
              src={`http://localhost:3000/img/${ products.products[products.products.length - 1].img }`}
              alt=" Star Wars - Mandalorian "
            />
          </div>
          <p> Precio: ${products.products[products.products.length - 1].price}</p>
          <br />
          <p>Descripcion: {products.products[products.products.length - 1].description}</p>
          {/* <a className="btn btn-danger" target="_blank" rel="nofollow" href="/">
            View movie detail
          </a> */}
        </div>
      </div>
      <div className="card shadow mb-4">
        <div className="card-header py-3">
          <h5 className="m-0 font-weight-bold text-gray-800">
            {" "}
            Ultimo Usuario En la DB{" "}
          </h5>
        </div>
        <div className="card-body">
          <h3>{users.users[users.users.length - 1].name}</h3>
          <div className="text-center">
            <img
              className="img-fluid px-3 px-sm-4 mt-3 mb-4"
              style={{ width: 40 + "rem" }} 
              src={`http://localhost:3000/img/avatars/${users.users[users.users.length - 1].avatar}`}
              alt=" Star Wars - Mandalorian "
            />
          </div>
          <p>Nombre de Usuario: {users.users[users.users.length - 1].user}</p>{" "}
          <br />
          <p>Correo electronico: {users.users[users.users.length - 1].email}</p>
          {/* <a className="btn btn-danger" target="_blank" rel="nofollow" href="/">
            View movie detail
          </a> */}
        </div>
      </div>
    </div>
  );
}

export default LastMovieInDb;
