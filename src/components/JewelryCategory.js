import React from "react";
import PropTypes from "prop-types";


function JewelryCategory(props){
    return(
        <React.Fragment>
            <div onClick={() => props.whenCategoryClicked(props.category)}>
                <img src={props.photo} alt={props.altTag} />
            </div>
        </React.Fragment>
    )
}

JewelryCategory.propTypes = {
    jewelry: PropTypes.object,
    whenCategoryClicked: PropTypes.func,
}

export default JewelryCategory;