import React from 'react';



function JewelryDetail(props) {

    return (
        <div>
        <h2>{props.item.name}</h2>
        <img src={props.item.photo} alt={props.item.altTag} />
        <p>${props.item.price}- only {props.item.quantity} left!</p>
        <p>{props.item.desc}</p>
        <button onClick={props.closeDetails}>Close</button>
        </div>
    );
}

export default JewelryDetail;