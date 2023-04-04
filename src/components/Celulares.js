import { Link, useParams } from "react-router-dom";
import React, { useEffect, useState } from 'react';
import { ItemList } from './ItemList';

const Celulares = () => {
  const [prods, setProds] = useState([]);
  useEffect(() => {
    fetch('https://63c27ec1b0c286fbe5ee8771.mockapi.io/FinalJavaScript/Products/?Categoria=Smartphone') //pido los datos
      .then((res) => res.json()) //lo traduzco
      .then((respuesta) => setProds(respuesta)) //los almacenamos
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
        
      <ItemList prods={prods} />
      <Link to='/'>Volver al Home</Link>
    </>
  );
};

export default Celulares