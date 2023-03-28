import React from "react";
import PropTypes from "prop-types";


function CartItem({ jewelry, onUpdateCartQty, onRemoveFromCart}) {

    const handleUpdateCartQty = (itemId, quantity) => {
        onUpdateCartQty(jewelry.id, jewelry.quantity);
    }

    const handleRemoveFromCart = () => {
        onRemoveFromCart(jewelry.id);
    }

    return (
        <div className="cart-item">
            <img className="cart-item_image" src={jewelry.photo} alt={jewelry.altTag} />
            <div className="cart-item_details">
                <h4 className="cart-item_details-name">{jewelry.name}</h4>
                <div className="cart-item_details-qty">
                    <button onClick={() => jewelry.quantity > 1 ? handleUpdateCartQty(jewelry.id, jewelry.quantity - 1) : handleRemoveFromCart()}>-</button>
                    <p>{jewelry.quantity}</p>
                    <button onClick={() => handleUpdateCartQty(jewelry.id, jewelry.quantity + 1)}>+</button>
                </div>
                <div className="cart-item_details-price">{jewelry.line_total.formated_with_symbol}</div>
            </div>
            <button className="cart-item_remove" onClick={handleRemoveFromCart}>Remove</button>
        </div>


    )

};

export default CartItem;

CartItem.propTypes = {
    jewelry: PropTypes.object,
    handleUpdateCartQty: PropTypes.func,
    onUpdateCartQty: () => {},
    onRemoveFromCart: () => {},
};