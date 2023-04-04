import React, { useState } from 'react';
const Agregar = ({ stock, initial, onAdd }) => {
  console.log('se monta Agregar');
  const [count, setCount] = useState(initial);
  const restar = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  const sumar = () => {
    if (count < stock) {
      setCount(count + 1);
    }
  };

  return (
    <>
      <div>
        <button onClick={restar}>-</button>
        <span>{count}</span>
        <button onClick={sumar}>+</button>
      </div>
      <button
        disabled={count === 0 || stock === 0}
        onClick={() => onAdd(count)}
      >
        Comprar
      </button>
    </>
  );
};

export default Agregar;
