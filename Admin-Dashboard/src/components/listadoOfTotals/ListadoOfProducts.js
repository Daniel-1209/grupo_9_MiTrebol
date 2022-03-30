import react, {useState, useEffect} from  'react';

const ListadoOfProducts =() => {

  const [products, setProducts] = useState({});

  useEffect(() => {
    fetch("/api/products")
      .then((data) => {
        return data.json();
      })
      .then((element) => setProducts(element));

  }, []);

return(
    <div className="container-fluid">
       
          <div className="row">
            
            {/* Listado de películas */}
            {products.count > 0 &&
              products.products.map((product, i) => {
                return (
                  <div className="col-sm-6 col-md-3 my-4" key={i}>
                    <div className="card shadow mb-4" style={{alignItems:'center'}}>
                      <div className="card-header py-3">
                        <h5 className="m-0 font-weight-bold text-gray-800">
                          {product.name}
                        </h5>
                      </div>
                      <p>${product.price}</p>
                      <div className="card-body">
                        <div className="text-center">
                          <img
                            className="img-fluid px-3 px-sm-4 mt-3 mb-4"
                            src={`http://localhost:3000/img/${ product.img }`}
                            alt={product.name}
                            style={{
                              width: "90%",
                              height: "400px",
                              objectFit: "cover",
                            }}
                          />
                        </div>
                        <p>{product.description}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
          {products.count === 0 && (
            <div className="alert alert-warning text-center">
              No se encontraron productos
            </div>
          )}
        
    </div>
)
};

export default ListadoOfProducts;

