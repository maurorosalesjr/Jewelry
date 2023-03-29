import React, {useState} from "react";
import PropTypes from 'prop-types';


function Cart(props) {
    const [jewelry, setJewelry] = useState([]);

    const addJewelry = (jewelry) => {
        setJewelry([...jewelry, jewelry]);
    }

    const removeJewelry = (jewelry) => {
        const newJewelry = jewelry.filter((i) => i !== jewelry);
        setJewelry(newJewelry);
    }
    
    const totalPrice = jewelry.reduce((acc, curr) => acc + curr.price, 0);

    return (
        <React.Fragment>
        <div>
            {jewelry.map((jewelry) => (
                <div key={jewelry.id}>
                <p>{jewelry.name} - ${jewelry.price}</p>
                <button onClick={() => removeJewelry(jewelry)}>Remove Item</button>
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