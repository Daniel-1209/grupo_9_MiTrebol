import React , { useState, useEffect } from 'react';
import SmallCard from './SmallCard';

/*  Cada set de datos es un objeto literal */

/* <!-- Movies in DB --> */

let moviesInDB = {
    title: 'Movies in Data Base',
    color: 'primary', 
    cuantity: 21,
    icon: 'fa-clipboard-list'
}

/* <!-- Total awards --> */

let totalAwards = {
    title:' Total awards', 
    color:'success', 
    cuantity: '79',
    icon:'fa-award'
}

/* <!-- Actors quantity --> */

let actorsQuantity = {
    title:'Actors quantity' ,
    color:'warning',
    cuantity:'49',
    icon:'fa-user-check'
}

let cartProps = [moviesInDB, totalAwards, actorsQuantity];

function ContentRowMovies(){
    const [users, setUsers] = useState({});
    const [products, setProducts] = useState({});
    const [maxAdmins, setMaxAdmins] = useState({});


    useEffect(() => {
        fetch("/api/products")
          .then((data) => {
            return data.json();
          })
          .then((element) => setProducts({
            title:'Total de Usuarios' ,
            color:'success', 
            cuantity: element.count,
            icon:'fa-user-check'
        }));
    
          fetch("/api/users")
          .then((data) => {
            return data.json();
          })
          .then((element) => setUsers({
            title:'Total de Productos' ,
            color:'warning',
            cuantity:element.count,
            icon: 'fa-award'
        }));

        fetch("/api/users")
        .then((data) => {
          return data.json();
        })
        .then((element) => setMaxAdmins({
            title: 'Usuarios Administradores',
            color: 'primary', 
            cuantity: 21,
            icon: 'fa-clipboard-list'
      }));
    
      }, []);

    return (
    
        <div className="row">
            
            

                 <SmallCard {...users} />
            
                 <SmallCard {...products} />
                 <SmallCard {...maxAdmins} />

        </div>
    )
}

export default ContentRowMovies;