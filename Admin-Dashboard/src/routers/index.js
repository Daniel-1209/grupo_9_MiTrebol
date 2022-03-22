// Aqui importamos nuestro modulo nativo del router
// Nota en v6 de reacRouter stwich ahora se llama Routes
import React from 'react';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
    Outlet
  } from 'react-router-dom';

// Importamos nuestras vistas 
import Home from '../views/home';
import FourFour from '../views/404';


let MyRoutes = () => { 

    // Dentro de Router se definen todas las  rutas con path
    return (
        <Router>
          <div>Hola</div>
          <Routes>

            <Route path="/" element={<Home />} />
            
            {/** Esto hace que si se quiere meter a otro enlace indefinido no sele va  a  mostrar */}
            
            <Route path= "*" element={<FourFour />} />
            
          </Routes>
        </Router>
      );

};


export default MyRoutes;