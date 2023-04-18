import { useContext } from 'react'
import { useCartContext } from '../Carrito/CartContext'
import { Link } from "react-router-dom"

function Item({ info }) {
    const nombre = useContext(useCartContext);

    return (
        <>
          <div class="text-center mb-2 card text-black card-body bg-white">
          <div class="card-group">
         
            <Link to={`/detalle/${info.id}`} className='producto'>
           
                <img src={info.img} width='300px' height='300px' alt='imgitem' />
            </Link>
            <div class="card-header">  
            <h5 class="card-title"> <p>{info.title} </p> </h5> 
                 <p>Caracteristica </p>
                   <p>{info.description} </p>
                   <div class="card-body">
                        <h5 class="mb-2 text-muted card-subtitle"><p>Precio ${info.price} </p> </h5>
                   </div>
                   <button class="btn btn-primary">Ver Detalles</button>
            </div>
            </div> 
            
        </div>  
        </>
    )
}

export default Item