import React from "react";
import PropTypes from "prop-types";
import Jewelry from "./Jewelry";
import 'bootstrap/dist/css/bootstrap.min.css'

function JewelryList (props) {
    return (
        <React.Fragment>
            {
                <div className="row">
                    {props.jewelryList.map((jewelry) =>
                        <div className="col-mid-4">
                            <Jewelry 
                                whenJewelryClicked={props.onJewelrySelection}
                                category={jewelry.category}
                                name={jewelry.name}
                                desc={jewelry.desc}
                                price={jewelry.price}
                                photo={jewelry.photo}
                                altTag={jewelry.altTag}
                                quantity={jewelry.quantity}
                                id={jewelry.id}
                                key={jewelry.id} />
                        </div>
                    )}
                </div>
            }
        </React.Fragment>
    );
}

JewelryList.propTypes = {
    jewelryList: PropTypes.array,
    onJewelrySelection: PropTypes.func,
}

export default JewelryList;