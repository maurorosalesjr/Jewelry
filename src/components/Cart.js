import React, {useState} from "react";
import PropTypes from 'prop-types';
import mainJewelryList from "./MainJewelryList";


function Cart(props) {
    // const jewel = props;
    const [jewelry, setJewelry] = useState([]);
    const jewelryItem = mainJewelryList;

    const addJewelry = (jewelryItem) => {
        setJewelry([...jewelry, jewelryItem]);
    }

    const removeJewelry = (jewelryItem) => {
        const newJewelry = jewelry.filter((j) => j !== jewelryItem);
        setJewelry(newJewelry);
    }
    
    const totalPrice = jewelry.reduce((acc, curr) => acc + curr.price, 0);

    return (
        <React.Fragment>
        <div>
            <h1>Your Shopping Cart!</h1>
            {jewelryItem.map((jewelryItem) => (
                <div key={jewelryItem.id}>
                <p>{jewelryItem.name} - ${jewelryItem.price}</p>
                <button onClick={() => removeJewelry(jewelryItem)}>Remove Item</button>
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