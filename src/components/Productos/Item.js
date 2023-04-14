import { useContext } from 'react'
import { useCartContext } from '../Carrito/CartContext'
import { Link } from "react-router-dom"

function Item({ info }) {
    const nombre = useContext(useCartContext);

    return (
        <>
            <Link to={`/detalle/${info.id}`} className='producto'>
                <img src={info.img} width='300px' height='300px' alt='imgitem' />
            </Link>
            <p>{info.title} </p>
            <p>Caracteristica </p>
            <p>{info.description} </p>
            <p>Precio ${info.price} </p>
        </>
    )
}

export default Item