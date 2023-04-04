import React from "react";
import ItemCount from "./ItemCount";


const ItemDetail = ({item}) => {
    return (
 
            <div className="row" id="itemdetail">
                <div className="col-md-4 offset-md-4">
                    <img src={item.Img} className="img-fluid" alt={item.Descrip} />
                    <h1>{item.Marca}</h1>
                    <p>{item.Modelo}</p>
                    <p>{item.Descrip}</p>
                    <p>${item.Precio} </p>
                    
                </div>
                <div>
                <ItemCount stockItems={10} />
                </div>
                
            </div>    
    )
 
}


export default ItemDetail;