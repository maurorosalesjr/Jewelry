import React, {useState} from 'react';
import mainJewelryList  from './MainJewelryList';
import JewelryDetail from './JewelryDetail';
import "./ButtonCss.css";


const imgStyle ={
    maxWidth: "20%",
    display: "block",
    align: "left",
    }

const genStyle = {
    textAlign: "left",
    paddingLeft: "5%",
    paddingRight: "5%",
}

const lowCount = {
    color: "red",
    textDecoration: "underline",
}



function JewelryList(props) {
    const [showDetail, setShowDetail] = useState(false);
    // const [lowQuant, setLowQuant] = useState(false);

// const lowQuant = () => {
//     const quant = mainJewelryList.quantity;
//     if(quant < 4){
//         return <p style={lowCount}>Only {quant} left!</p>
//     } else {
//         return <p>{quant} remaining.</p>
//     }
// }

    return (
        <div style={genStyle}>
        {mainJewelryList.map((jewelryItem) => (
            
            <div class={genStyle} key={jewelryItem.id}>
            <img style={imgStyle} src={jewelryItem.photo} alt={jewelryItem.altTag} />
            <p >{jewelryItem.name} - ${jewelryItem.price}- 
            {showDetail ? (
                <JewelryDetail />
                // <button onClick={() =>setShowDetail(showDetail)}>Back</button>
            ) : (
                <button class="button-64" onClick={() =>setShowDetail(!showDetail)}>Details</button>
            )}</p> 
            {/* {lowQuant()} */}
            
            
            
            
            
            <br />
            <button class="button-64" onClick={() => props.addToCart(jewelryItem)}>Add to Cart</button>
            <hr />
            </div>
        ))}
        </div>
    );
    }

export default JewelryList;