import React from 'react'
import { useCartContext } from './CartContext'

function ItemCart({ product }) {
    const { removeProduct } = useCartContext();
    return (
        <div className='itemcart'>
            <img src={product.image} alt={product.title} />
            <div>
                <p>Titulo: {product.title} </p>
                <p>Cantidad: {product.stock} </p>
                <p>Precio u.: {product.price} </p>
                <p>Subtotal: $ {(product.stock) * (product.price)} </p>
                <button onClick={() => removeProduct(product.id)}>Eliminar</button>

            </div>
        </div>
    )
}

export default ItemCart