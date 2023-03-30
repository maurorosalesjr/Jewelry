import React from 'react';
import mainJewelryList from './MainJewelryList';


function JewelryDetail(props) {
    const { id } = props.match.params;
    const item = mainJewelryList.find((item) => item.id === parseInt(id));

    return (
        <div className="details">
        <h2>{item.name}</h2>
        <img src={item.image} alt={item.name} />
        <p>{`Price: $${item.price.toFixed(2)}`}</p>
        <p>{`Description: ${item.description}`}</p>
        </div>
    );
}

export default JewelryDetail;