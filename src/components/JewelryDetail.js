import React from "react";
import PropTypes from "prop-types";


function JewelryDetail(props) {
    const { jewerly } = props;


    return(
        <React.Fragment>
            <div>
                <img src={jewerly.photo} alt={jewerly.altTag} />
                <h3>{jewerly.name}</h3>
                <h6>{jewerly.catagory}</h6>
                <p>{jewerly.desc}</p>
                <p><em>{jewerly.price}</em></p>
                <p>{jewerly.quantity}</p>
            </div>
        </React.Fragment>
    )
}

JewelryDetail.propTypes = {
    jewerly: PropTypes.object,
}

export default JewelryDetail;