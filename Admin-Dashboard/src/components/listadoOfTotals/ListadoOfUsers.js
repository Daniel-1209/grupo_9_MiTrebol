import react, {useState, useEffect} from  'react';

const ListadoOfUsers =() => {
  const [users, setUsers] = useState({});

  useEffect(() => {

      fetch("/api/users")
      .then((data) => {
        return data.json();
      })
      .then((element) => setUsers(element));

  }, []);

return(
    <div className="container-fluid">
       
          <div className="row">
            
            {/* Listado de películas */}
            {users.count > 0 &&
              users.users.map((user, i) => {
                return (
                  <div className="col-sm-6 col-md-3 my-4" key={i}>
                    <div className="card shadow mb-4" style={{alignItems:'center'}}>
                      <div className="card-header py-3">
                        <h5 className="m-0 font-weight-bold text-gray-800">
                          {user.name}
                        </h5>
                      </div>
                      <div className="card-body">
                        <div className="text-center">
                          <img
                            className="img-fluid px-3 px-sm-4 mt-3 mb-4"
                            src={`http://localhost:3000/img/avatars/${user.avatar}`}
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
          {users.count === 0 && (
            <div className="alert alert-warning text-center">
              No se encontraron películas
            </div>
          )}
        
    </div>
)
};

export default ListadoOfUsers;

