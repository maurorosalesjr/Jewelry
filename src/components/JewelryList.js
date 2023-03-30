import React from 'react';
import mainJewelryList  from './MainJewelryList';


const imgStyle ={
    maxWidth: "15%",
    display: "block",
    align: "left",
    }


function JewelryList(props) {
    return (
        <div>
        <h2>Jewelry Items</h2>
        {mainJewelryList.map((jewelryItem) => (
            
            <div key={jewelryItem.id}>
            <img style={imgStyle} src={jewelryItem.photo} alt={jewelryItem.altTag} />
            <p>{jewelryItem.name} - ${jewelryItem.price}</p>

            <button onClick={() => props.addToCart(jewelryItem)}>Add to Cart</button>
            </div>
        ))}
        </div>
    );
    }

export default JewelryList;