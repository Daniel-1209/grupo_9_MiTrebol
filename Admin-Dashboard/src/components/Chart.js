import React from 'react';
import ChartRow from './ChartRow';

let tableRowsData = [
    {
        Shopper: 'Jesús Alcantara',
        Sales: '1223',
        Rating: '5',
        Categories: ['Jabones','Velas','Artesanías'],
        Date: 2020
    },
    {
        Shopper: 'Elena Cruz',
        Sales: '1422',
        Rating: '4.8',
        Categories: ['Belleza al natural','Semillas','Artesanías'],
        Date: 2021
    },
    
]


function Chart (){
    return (
        /* <!-- DataTales Example --> */
        <div className="card shadow mb-4">
            <div className="card-body">
                <div className="table-responsive">
                    <table className="table table-bordered" id="dataTable" width="100%" cellSpacing="0">
                        <thead>
                            <tr>
                                <th>Nombre del producto</th>
                                <th>Ventas</th>
                                <th>Rating</th>
                                <th>Categorías</th>
                                <th>Fecha de registro</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                            tableRowsData.map( ( row , i) => {
                                return <ChartRow { ...row} key={i}/>
                            })
                            }

                        </tbody>
                    </table>
                </div>
            </div>
        </div>

    )
}

export default Chart;