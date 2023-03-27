import React from "react";
import PropTypes from "prop-types";


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
            </div>
        </React.Fragment>
    )
}


Jewelry.PropTypes = {
    category: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    img: PropTypes.string.isRequired,
    altTag: PropTypes.string.isRequired,
    quantity: PropTypes.number.isRequired,
    id: PropTypes.string,
    whenJewelryClicked: PropTypes.func
}

export default Jewelry;