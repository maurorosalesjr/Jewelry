import React from "react";
import PropTypes from "prop-types";
import Jewelry from "./Jewelry";

function JewelryList (props) {
    return (
        <React.Fragment>
            {
                props.jewelryList.map((jewelry) =>
                <Jewelry 
                    whenJewelryClicked={props.onJewelrySelection}
                    category={jewelry.category}
                    name={jewelry.name}
                    desc={jewelry.desc}
                    price={jewelry.price}
                    img={jewelry.img}
                    altTag={jewelry.altTag}
                    quantity={jewelry.quantity}
                    id={jewelry.id}
                    key={jewelry.id} />
                )
            }
        </React.Fragment>
    );
}

JewelryList.propTypes = {
    jewelryList: PropTypes.array,
    onJewelrySelection: PropTypes.func,
}

export default JewelryList;