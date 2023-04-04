import { Link, useParams } from "react-router-dom";
import React, { useEffect, useState } from 'react';
import { ItemList } from './ItemList';


const Pc = () => {
  const [prods, setProds] = useState([]);
  useEffect(() => {
    fetch('https://63c27ec1b0c286fbe5ee8771.mockapi.io/FinalJavaScript/Products/?Categoria=Pcs') //pido los datos
      .then((res) => res.json()) //lo traduzco
      .then((respuesta) => setProds(respuesta)) //los almacenamos
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
       <div className="container">
        <div className="btn-group">
          <Link to='/'>Volver al Home</Link> 
          <ItemList prods={prods} />
        </div>
      </div> 
    </>
  );
};

export default Pc