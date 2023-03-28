import React from "react";
import PropTypes from "prop-types";
import 'bootstrap/dist/css/bootstrap.min.css'


const imgStyle ={
    maxWidth: "15%",
    display: "block",
    align: "left",
}

function Jewelry(props) {
    return(
        <React.Fragment>
            <div onClick={() => props.whenJewelryClicked(props.id)}>
                <img style={imgStyle} src={props.photo} alt={props.altTag} />
                <p><em>{props.name}</em></p> 
                <p>Only {props.quantity} left</p>
            </div>
            <button onClick={()=> props.whenSaleClicked(props.id) }>Quick Buy!</button>
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
    whenSaleClicked: PropTypes.func
}

export default Jewelry;