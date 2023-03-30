import React from 'react';
import mainJewelryList from './MainJewelryList';


function JewelryDetail(mainJewelryList) {
    const {jewelry} = mainJewelryList;

    return (
        <div className="details">
        <h2>{mainJewelryList.jewelry.name}</h2>
        <img src={jewelry.photo} alt={jewelry.altTag} />
        <p>{`Price: $${jewelry.price}`}</p>
        <p>{`Description: ${jewelry.description}`}</p>
        </div>
    );
}

export default JewelryDetail;