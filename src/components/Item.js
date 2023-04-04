import React from 'react';
import { Link } from "react-router-dom";

const Item = ({ item }) => {
  return (

        <Link to={"/item/" + item.id} className="text-decoration-none" >
            <div className="container">
                <div className="card  border border-0">
                    <img src={item.Img} className="card-img-top" alt={item.descrip} />
                    <div className="card-body text-center">
                        <h5 className="card-title">{item.Marca}</h5>
                        <p className="card-text">{item.Modelo}</p>
                        <p className="card-text ">{item.descrip}</p>
                        <p className="card-text ">${item.Precio}</p>
                      
                    </div>
                </div>
            </div>
         </Link>
  );
};

export default Item;