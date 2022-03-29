import axios from "axios";
import fetch from "node-fetch";
import productsApi from "../../Apis/apiProducts";
import { useState, useEffect } from "react";

function GenresInDb() {
  const [products, setProducts] = useState({});
  const [users, setUsers] = useState({});

  useEffect(() => {
    fetch("/api/products")
      .then((data) => {
        return data.json();
      })
      .then((element) => setProducts(element));

      fetch("/api/users/categorias")
      .then((data) => {
        return data.json();
      })
      .then((element) => setUsers(element));

  }, []);
  useEffect(() => {
    fetch("/api/products")
      .then((data) => {
        return data.json();
      })
      .then((element) => setProducts(element));
  }, []);
  console.log(products);

  return (
    <div style={{  display: 'flex', width: '100%'}}>
      <div className="col-lg-6 mb-4">
        <div className="card shadow mb-4">
          <div className="card-header py-3">
            <h5 className="m-0 font-weight-bold text-gray-800">
              Géneros en base de datos de Productos
            </h5>
          </div>
          <div className="card-body">
            <div className="row">
              <div className="col-lg-6 mb-4">
                <div className="card bg-dark text-white shadow">
                  <div className="card-body">Jabones</div>
                </div>
              </div>
              <div className="col-lg-6 mb-4">
                <div className="card bg-dark text-white shadow">
                  <div className="card-body">
                    {products?.countByCategory?.Jabon}{" "}
                  </div>
                </div>
              </div>

              <div className="col-lg-6 mb-4">
                <div className="card bg-dark text-white shadow">
                  <div className="card-body">Belleza</div>
                </div>
              </div>
              <div className="col-lg-6 mb-4">
                <div className="card bg-dark text-white shadow">
                  <div className="card-body">
                    {products?.countByCategory?.Belleza}
                  </div>
                </div>
              </div>
              <div className="col-lg-6 mb-4">
                <div className="card bg-dark text-white shadow">
                  <div className="card-body">Semillas</div>
                </div>
              </div>
              <div className="col-lg-6 mb-4">
                <div className="card bg-dark text-white shadow">
                  <div className="card-body">
                    {products?.countByCategory?.Semillas}
                  </div>
                </div>
              </div>
              <div className="col-lg-6 mb-4">
                <div className="card bg-dark text-white shadow">
                  <div className="card-body">Artesanias</div>
                </div>
              </div>
              <div className="col-lg-6 mb-4">
                <div className="card bg-dark text-white shadow">
                  <div className="card-body">
                    {products?.countByCategory?.Artesanias}
                  </div>
                </div>
              </div>
              <div className="col-lg-6 mb-4">
                <div className="card bg-dark text-white shadow">
                  <div className="card-body">Velas</div>
                </div>
              </div>
              <div className="col-lg-6 mb-4">
                <div className="card bg-dark text-white shadow">
                  <div className="card-body">
                    {products?.countByCategory?.Velas}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="col-lg-6 mb-4">
        <div className="card shadow mb-4">
          <div className="card-header py-3">
            <h5 className="m-0 font-weight-bold text-gray-800">
              Categorias en base de datos de Usuarios
            </h5>
          </div>
          <div className="card-body">
            <div className="row">
              <div className="col-lg-6 mb-4">
                <div className="card bg-darkUsers text-white shadow">
                  <div className="card-body">Vendedores</div>
                </div>
              </div>
              <div className="col-lg-6 mb-4">
                <div className="card bg-darkUsers text-white shadow">
                  <div className="card-body">
                    {users.countVendors}{" "}
                  </div>
                </div>
              </div>

              <div className="col-lg-6 mb-4">
                <div className="card bg-darkUsers text-white shadow">
                  <div className="card-body">Compradores</div>
                </div>
              </div>
              <div className="col-lg-6 mb-4">
                <div className="card bg-darkUsers text-white shadow">
                  <div className="card-body">
                    {users.countBuyers}
                  </div>
                </div>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GenresInDb;
