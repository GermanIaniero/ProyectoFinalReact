import React from "react";
import { useCartContext } from "./CartContext";
import { Link } from "react-router-dom";
import ItemCart from "./ItemCart";
import {
    getFirestore,
    collection,
    doc,
    addDoc,
    updateDoc,
} from "firebase/firestore";
import { useNavigate } from "react-router-dom";

function Cart() {
    const { cart, totalPrice } = useCartContext();
    const navigate = useNavigate();

    const order = {
        buyer: {
            name: "Cosme Fulanito",
            email: "cosmefulanito@gmail.com",
            phone: "12345678",
            address: "calle falsa 123",
        },
        items: cart.map((p) => ({
            id: p.id,
            title: p.title,
            price: p.price,
            stock: p.stock,
        })),
        total: totalPrice(),
    };

    const handleClick = () => {
        const db = getFirestore();
        const ordersCollection = collection(db, "orders");
        addDoc(ordersCollection, order).then(({ id }) => console.log(id));
    };

    const updateOrder = () => {
        const db = getFirestore();
        const orderDoc = doc(db, "orders", "DKmIC9jJBDHk2pEhJgXX");
        updateDoc(orderDoc, { name: "Roberta" });
    };
    updateOrder();

    if (cart.length === 0) {
        return (
            <>
                <p>No hay elementos en el carrito</p>
                <Link to='/'>Hacer compra</Link>
            </>
        );
    }

    return (
        <>
            {cart.map((product) => (
                <ItemCart key={product.id} product={product} />
            ))}
            <p> total:$ {totalPrice()} </p>
            
            <button
                className='btn btn-success'
                onClick={() => navigate("/checkout")}>
                Generar orden de compra
            </button>
        </>
    );
}

export default Cart;