import React, { useRef, useEffect, useState } from "react";

import noPoster from "../../assets/images/404.jpg";

function SearchUser() {
  const movieRef = useRef(null);
  const [keyword, setKeyword] = useState("");
  const [users, setUsers] = useState([
    {
      name: "Daniel Garcia",
      email: "algo@gmail.com",
      imgUrl: "http://localhost:3000/img/avatars/Avatar-1642658606578.jpg",
    },
  ]);

  const searchMovie = (e) => {
    e.preventDefault();
    // console.log(movieRef.current.value);
    setKeyword(movieRef.current.value);
  };

  // Credenciales de API
  const apiKey = "X"; // Intenta poner cualquier cosa antes para probar

  useEffect(() => {
    fetch(`/api/users/search?text=${keyword}`)
      .then((result) => {
        return result.json();
      })
      .then((data) => {
        //console.log(data);
        const resultSet = data.users;
        setUsers([...resultSet]);
      })
      .catch((e) => console.log(e));
  }, [keyword]);

  return (
    <div className="container-fluid">
      {apiKey !== "" ? (
        <>
          <div className="row my-4">
            <div className="col-12 col-md-6">
              {/* Buscador */}
              <form method="GET" onSubmit={searchMovie}>
                <div className="form-group">
                  <label htmlFor="">Buscar por nombre:</label>
                  <input ref={movieRef} type="text" className="form-control" />
                </div>
                <button className="btn btn-info">Search</button>
              </form>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <h2>Usuarios para la palabra: {keyword}</h2>
            </div>
            {/* Listado de películas */}
            {users.length > 0 &&
              users.map((user, i) => {
                return (
                  <div className="col-sm-6 col-md-3 my-4" key={i}>
                    <div className="card shadow mb-4">
                      <div className="card-header py-3">
                        <h5 className="m-0 font-weight-bold text-gray-800">
                          {user.name}
                        </h5>
                      </div>
                      <div className="card-body">
                        <div className="text-center">
                          <img
                            className="img-fluid px-3 px-sm-4 mt-3 mb-4"
                            src={user.imgUrl}
                            alt={user.name}
                            style={{
                              width: "90%",
                              height: "400px",
                              objectFit: "cover",
                            }}
                          />
                        </div>
                        <p>{user.email}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
          {users.length === 0 && (
            <div className="alert alert-warning text-center">
              No se encontraron resultados
            </div>
          )}
        </>
      ) : (
        <div className="alert alert-danger text-center my-4 fs-2">
          Eyyyy... ¿PUSISTE TU APIKEY?
        </div>
      )}
    </div>
  );
}

export default SearchUser;
