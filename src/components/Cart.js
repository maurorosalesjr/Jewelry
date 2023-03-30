import React from 'react';


function Cart(props) {
    return (
        <React.Fragment>
        <h2>Shopping Cart</h2>
        {props.jewelry.map((jewelryItems) => (
            <div key={jewelryItems.id}>
            <p>{jewelryItems.name} - ${jewelryItems.price}</p>
            <button onClick={() => props.removeFromCart(jewelryItems)}>Remove from Cart</button>
            </div>
        ))}
        <p>Total Price: ${props.totalPrice}</p>
        </React.Fragment>
    );
    }

export default Cart;