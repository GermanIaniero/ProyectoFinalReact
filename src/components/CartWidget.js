import React from "react";
import urlImage2 from '../img/cart3.svg'

const CartWidget = () => {
    return (
        <div>
            <button type="button" className="btn colorCartButton position-relative">
                <img src={urlImage2} alt={"carrito"} width={20}  />
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">0</span>
            </button>
        </div>

    )
}

export default CartWidget;