import React from "react";
import PropTypes from "prop-types";
import Jewelry from "./Jewelry";
import Cart from "./Cart";
import 'bootstrap/dist/css/bootstrap.min.css'

function JewelryList (props) {
    return (
        <React.Fragment>
            {props.jewelryList.map((jewelry) =>
                <Jewelry 
                    whenJewelryClicked={props.onJewelrySelection}
                    whenSaleClicked={props.onClickingSubtract}
                    category={jewelry.category}
                    name={jewelry.name}
                    desc={jewelry.desc}
                    price={jewelry.price}
                    photo={jewelry.photo}
                    altTag={jewelry.altTag}
                    quantity={parseInt(jewelry.quantity)}
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
    onSaleClicked: PropTypes.func,

}

export default JewelryList;