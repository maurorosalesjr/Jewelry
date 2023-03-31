import React, {useState} from 'react';
import mainJewelryList  from './MainJewelryList';
import JewelryDetail from './JewelryDetail';
import "./ButtonCss.css";


const imgStyle ={
    maxWidth: "30%",
    display: "block",
    float: "left",
    marginRight: "25%",
    }

const genStyle = {
    textAlign: "left",
    paddingLeft: "5%",
    paddingRight: "5%",
    marginTop: "1%",
    marginBottom: "1%",
}

const infoClickables = {
    display: "block",
    justifyText: "left",
    marginRight: "1%",
    marginBottom: "25%",
    marginLeft: "33%",
    fontFamily: "cursive",
    color: "#a23cf0",
    
}

const buttonPlace = {
    marginLeft: "33%",

}

function JewelryList(props) {
    const [selectedItem, setSelectedItem] = useState(null);

    const showDetails = (item) => {
        setSelectedItem(item);
    };

    return (
        <div>
            {selectedItem ? 
                (<JewelryDetail
                item={selectedItem}
                closeDetails={() => setSelectedItem(null)}
                />) 
            :
                ( mainJewelryList.map((item, index) => (
                    <div style={genStyle} key={index}>
                        <img style={imgStyle} src={item.photo} alt={item.altTag} />
                        <div style={infoClickables}>
                            <h3 >{item.name}- ${item.price}</h3>
                            <br/>
                            <div style={buttonPlace}>
                            <button class="button-64" onClick={() => showDetails(item)}>Details</button>
                            <br />
                            <button class="button-64" onClick={() => props.addToCart(item)}>Add to Cart</button>
                            </div>
                        </ div>
                        <br />
                        <hr />
                    </div>
                )) )
            }
        </div>
    );
}

export default JewelryList;

