import React, {useState} from "react";
import PropTypes from "prop-types";
import Cart from "./Cart"
import 'bootstrap/dist/css/bootstrap.min.css'


const imgStyle ={
    maxWidth: "15%",
    display: "block",
    align: "left",
}

function Jewelry(props) {
    const [jewelry, setJewelry] = useState([]);

    const addJewelry = (jewelry) => {
        setJewelry([...jewelry, jewelry]);
        console.log("reached!")
    }

    return(
        <React.Fragment>
            <div onClick={() => props.whenJewelryClicked(props.id)}>
                <img style={imgStyle} src={props.photo} alt={props.altTag} />
                <p><em>{props.name} - ${props.price}</em></p> 
                <p>Only {props.quantity} left</p>
            </div>
            <button onClick={()=> addJewelry(props.id) }>Add to Cart!</button>
            {/* <Cart jewelry={props} /> */}
            <hr />
        </React.Fragment>
    )
}


Jewelry.propTypes = {
    category: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    photo: PropTypes.string.isRequired,
    altTag: PropTypes.string.isRequired,
    quantity: PropTypes.number.isRequired,
    id: PropTypes.string,
    whenJewelryClicked: PropTypes.func,
    addJewelry: PropTypes.func
}

export default Jewelry;