import React, {useState} from "react";
import PropTypes from 'prop-types';
import Jewelry from "./Jewelry";


function Cart(props) {
    const jewel = props;
    const [jewelry, setJewelry] = useState([]);
    

    const addJewelry = (props) => {
        setJewelry([...jewelry, props]);
    }

    const removeJewelry = (props) => {
        const newJewelry = jewelry.filter((i) => i !== props);
        setJewelry(newJewelry);
    }
    
    const totalPrice = jewelry.reduce((acc, curr) => acc + curr.price, 0);

    return (
        <React.Fragment>
        <div>
            <h1>Your Shopping Cart!</h1>
            {jewelry.map((jewelry) => (
                <div key={jewelry.id}>
                <p>{jewelry.name} - ${jewelry.price}</p>
                <button onClick={() => removeJewelry(jewel)}>Remove Item</button>
                </div>
            ))}
            <p>Total Price: ${totalPrice}</p>
        </div>
        </React.Fragment>
    );
};

export default Cart;


Cart.propTypes = {
    cart: PropTypes.object,
    addJewelry: PropTypes.func,
    removeJewelry: PropTypes.func,
}