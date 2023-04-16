import React from 'react'
import { useCartContext } from './CartContext'

function ItemCart({ product }) {
    const { removeProduct } = useCartContext();
    return (
        <div className='itemcart'>
            <img src={product.img} alt={product.title} />
            <div>
                <p>Producto: {product.title} </p>
                <p>Stock: {product.stock} </p>
                <p>Precio Unitario: ${product.price} </p>
                <p>Subtotal: $ {(product.stock) * (product.price)} </p>
                <button onClick={() => removeProduct(product.id)}>Eliminar</button>

            </div>
        </div>
    )
}

export default ItemCart