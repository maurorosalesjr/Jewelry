import React from 'react';
import mainJewelryList from './MainJewelryList';


function JewelryDetail(props) {
    // const { id } = props.match.params;
    const item = mainJewelryList.find((item) => item.id === parseInt(props.id));

    return (
        <div className="details">
        <h2>{props.name}</h2>
        <img src={props.photo} alt={props.altTag} />
        <p>{`Price: $${props.price}`}</p>
        <p>{`Description: ${props.description}`}</p>
        </div>
    );
}

export default JewelryDetail;