import React, {useState} from "react";
import PropTypes from "prop-types";

const deetStyle = {
    marginLeft: "5%",
    textAlign: "left",
    
}

const imgStyle = {
    align: "center",
    display: "flex",
    justifyContent: "center",
    alignItem: "center",
    marginBottom: "5%"
}

function JewelryDetail(props) {
    const { jewerly, } = props;
    const [jewelry, setJewelry] = useState([]);
    const addJewelry = (jewelry) => {
        setJewelry([...jewelry, jewelry]);
        console.log("reached!")
    }


    return(
        <React.Fragment>
            <div style={deetStyle}>
                <div style={imgStyle}>
                    <img src={jewerly.photo} alt={jewerly.altTag} />
                </div>
                <h3>{jewerly.name}</h3>
                <h6>{jewerly.catagory}</h6>
                <p>{jewerly.desc}</p>
                <p><em>${jewerly.price}</em></p>
                <p>Only {jewerly.quantity} {jewerly.name}s in stock</p>
                <button onClick={()=>  addJewelry(jewerly.id)}>Add to Cart</button> 
            </div>
        </React.Fragment>
    )
}

JewelryDetail.propTypes = {
    jewerly: PropTypes.object,
    whenSaleClicked: PropTypes.func,
}

export default JewelryDetail;