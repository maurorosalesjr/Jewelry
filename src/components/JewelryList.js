import React, {useState} from 'react';
import mainJewelryList  from './MainJewelryList';
import JewelryDetail from './JewelryDetail';
import "./ButtonCss.css";


const imgStyle ={
    maxWidth: "30%",
    display: "block",
    align: "left",
    width: "100%"
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
    // const [showDetail, setShowDetail] = useState(false);
    const [selectedItem, setSelectedItem] = useState(null);

    const showDetails = (item) => {
        setSelectedItem(item);
    };

    return (
        <div>
                    {selectedItem && (
            <JewelryDetail
            item={selectedItem}
            closeDetails={() => setSelectedItem(null)}
            />
        )}
        {mainJewelryList.map((item, index) => (
            <div class={genStyle} key={index}>
            <img style={imgStyle} src={item.photo} alt={item.altTag} />
            <p>{item.name}- ${item.price}</p>
            <div>
                <button class="button-64" onClick={() => showDetails(item)}>Details</button>
            </div>
            <br />
            <button class="button-64" onClick={() => props.addToCart(item)}>Add to Cart</button>
            <hr />
            </div>
        ))}
        </div>

    );
    }

export default JewelryList;