import React from 'react';


function ChartRow(props){
    return (
                <tr>
                    <td>{props.Shopper}</td>
                    <td>{props.Sales}</td>
                    <td>{props.Rating}</td>
                    <td>
                        <ul>
                            {props.Categories.map( (category,i) => 
                                <li key={`category ${i}`}>{category}</li>
                            )}
                        </ul>
                    </td>
                    <td>{props.Date}</td>
                </tr>
            )
    }
    
        

export default ChartRow;