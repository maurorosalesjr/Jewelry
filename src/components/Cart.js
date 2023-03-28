import React from "react";
import PropTypes from 'prop-types';
import CartItem from './CartItem';
import Jewelry from "./Jewelry";

function Cart({ cart, onRemoveFromCart, onEmptyCart, onUpdateQty}) {
    const { jewerly, } = props;
    
    const handleEmptyCart = () => {
        onEmptyCart();
    }

    const renderEmptyMessage = () => {
        if(cart.items > 0) {
            return;
    }
        return (
            <p className="cart_none">Your cart is empty, adding items is a good way to fix that!</p>
        );
    }

    const renderItems = (props) => (
        cart.jewerly.map((jewelry) => (
            <CartItem 
            item={jewelry.name}
            onUpdateQty={onUpdateQty}
            onRemoveFromCart={onRemoveFromCart}
            key={jewelry.id}
            className="cart_inner"
            />
        ))
    )

    const renderTotal = () => (
        <div className="cart_total">
            <p className="cart_total_title">Subtotal:</p>
            <p className="cart_total_price">{cart.subtotal.formatted_with_symbol}</p>
        </div>
    )


    return (
        <div className="cart">
            <h4 className="cart_heading">Your Shopping Cart</h4>
            { renderEmptyMessage() }
            { renderItems() }
            { renderTotal() }
            <div className="cart_footer">
                <button className="cart_button-empty" onClick={handleEmptyCart}> Empty Cart</button>
                <button className="cart_button-checkout">Checkout</button>
            </div>
        </div>
    );
};

export default Cart;


Cart.propTypes = {
    cart: PropTypes.object,
    onRemoveFromCart: () => {},
    onUpdateQty: () => {},
    onEmptyCart: () => {},
}