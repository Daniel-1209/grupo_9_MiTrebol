import React from 'react';
import image from '../assets/images/dark_bl_logo.png';
import ContentWrapper from './ContentWrapper';
import GenresInDb from './totalOfCategories/GenresInDb';
import LastMovieInDb from './LastUserAndProductInDb';
import ContentRowMovies from './ContentRowMovies';
import ListadoOfProducts from './listadoOfTotals/ListadoOfProducts';
import ListadoOfUsers from './listadoOfTotals/ListadoOfUsers';
import NotFound from './NotFound';

import SearchUser from './search/SearchUser';
import SearchProduct from './search/SearcProduct';

import {Link, Route, Switch} from 'react-router-dom';

function SideBar(){
    return(
        <React.Fragment>
            {/*<!-- Sidebar -->*/}
            <ul className="navbar-nav bg-gradient-secondary sidebar sidebar-dark accordion" id="accordionSidebar">

                {/*<!-- Sidebar - Brand -->*/}
                <a className="sidebar-brand d-flex align-items-center justify-content-center" href="/">
                    <div className="sidebar-brand-icon">
                        <img className="w-100" src={image} alt="Digital House"/>
                    </div>
                </a>

                {/*<!-- Divider -->*/}
                <hr className="sidebar-divider my-0"/>

                {/*<!-- Nav Item - Dashboard -->*/}
                <li className="nav-item active">
                    <Link className="nav-link" to="/">
                        <i className="fas fa-fw fa-tachometer-alt"></i>
                        <span>Dashboard - MiTRÉBOL</span></Link>
                </li>

                {/*<!-- Divider -->*/}
                <hr className="sidebar-divider"/>

                {/*<!-- Heading -->*/}
                <div className="sidebar-heading">Secciones</div>

                {/*<!-- Nav Item - Pages -->*/}
                <li className="nav-item">
                <Link className="nav-link" to="/GenresInDb">
                        <i className="fas fa-fw fa-folder"></i>
                        <i class="fa-solid"></i>
                        <span>Totales en categorias</span>
                    </Link>
                </li>

                 {/*<!-- Nav Item - Pages -->*/}
                 <li className="nav-item">
                <Link className="nav-link" to="/ListadoOfProducts">
                        <i className="fas fa-fw fa-folder"></i>
                        <span>Listado de Productos</span>
                    </Link>
                </li>

                 {/*<!-- Nav Item - Pages -->*/}
                 <li className="nav-item">
                <Link className="nav-link" to="/ListadoOfUsers">
                        <i className="fas fa-fw fa-folder"></i>
                        <span>Listado de Usuarios</span>
                    </Link>
                </li>

                {/*<!-- Nav Item - Charts -->*/}
                <li className="nav-item">
                    <Link className="nav-link" to="/LastMovieInDb">
                        <i className="fas fa-fw fa-chart-area"></i>
                        <span>Ultimos agregados</span></Link>
                </li>



                <li className="nav-item nav-link">
                <Link className="nav-link" to="/SearchProduct">
                        <i className="fas fa-fw fa-table"></i>
                        <span>Buscar Producto</span></Link>
                </li>

                <li className="nav-item nav-link">
                <Link className="nav-link" to="/SearchUser">
                        <i className="fas fa-fw fa-table"></i>
                        <span>Buscar Usuario</span></Link>
                </li>

                
                {/*<!-- Divider -->*/}
                <hr className="sidebar-divider d-none d-md-block"/>
            </ul>
            {/*<!-- End of Sidebar -->*/}

            {/*<!-- Microdesafio 1 -->*/}
            {/*<!--<Route exact path="/">
                <ContentWrapper />
            </Route>
            <Route path="/GenresInDb">
                <GenresInDb />
            </Route>
            <Route path="/LastMovieInDb">
                <LastMovieInDb />
            </Route>
            <Route path="/ContentRowMovies">
                <ContentRowMovies />
            </Route>*/}
            {/*<!-- End Microdesafio 1 -->*/}

            {/*<!-- End Microdesafio 2 -->*/}
            <Switch>
                <Route exact path="/">
                    <ContentWrapper />
                </Route>
                <Route path="/GenresInDb">
                    <GenresInDb />
                </Route>
                <Route path="/LastMovieInDb">
                    <LastMovieInDb />
                </Route>
                <Route path="/ContentRowMovies">
                    <ContentRowMovies />
                </Route>
                <Route path="/ListadoOfProducts">
                    <ListadoOfProducts />
                </Route>
                <Route path="/ListadoOfUsers">
                    <ListadoOfUsers />
                </Route>
                <Route path="/SearchUser">
                    <SearchUser />
                </Route>
                <Route path="/SearchProduct">
                    <SearchProduct />
                </Route>
                <Route component={NotFound} />
            </Switch>
            {/*<!-- End Microdesafio 2 -->*/}
        </React.Fragment>
    )
}
export default SideBar;