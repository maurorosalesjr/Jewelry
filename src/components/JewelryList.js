import React, {useState} from 'react';
import mainJewelryList  from './MainJewelryList';
import JewelryDetail from './JewelryDetail';


const imgStyle ={
    maxWidth: "15%",
    display: "block",
    align: "left",
    }


function JewelryList(props) {
    const [showDetail, setShowDetail] = useState(false);

    return (
        <div>
        <h2>Jewelry Items</h2>
        {mainJewelryList.map((jewelryItem) => (
            
            <div key={jewelryItem.id}>
            <img style={imgStyle} src={jewelryItem.photo} alt={jewelryItem.altTag} />
            <p>{jewelryItem.name} - ${jewelryItem.price}</p>

            <button onClick={() => props.addToCart(jewelryItem)}>Add to Cart</button>
            
            {showDetail ? (
                <JewelryDetail />
            ) : (
                <button onClick={() =>setShowDetail(!showDetail)}>Details</button>
            )}
            </div>
        ))}
        </div>
    );
    }

export default JewelryList;