import React from 'react';
import "./ButtonCss.css";

const aboutStyle = {
    float: "right",
    }

const imgStyle2 = {
    display: "block",
    maxWidth: "40%",
    width: "100%",
    marginLeft: "29%"
}

const title = {
    fontFamily: "cursive",
    color: "#a23cf0",
    textAlign: "center",
}

const body = {
    marginLeft: "15%",
    marginRight: "15%",
}

const lowCount = {
    color: "red",
    textDecoration: "underline",
}

function JewelryDetail(props) {

    return (
        <div>
            <h2 style={title} >{props.item.name}</h2>
            <img style={imgStyle2} src={props.item.photo} alt={props.item.altTag} />
                <div style={body} >
                    {props.item.quantity > 5 ? ( <p><em>${props.item.price}- only {props.item.quantity} left!</em></p>
                    ) : (<p><em style={lowCount}>${props.item.price}- only {props.item.quantity} left!</em></p>
                    )}
                    <p>{props.item.desc}</p>
                </div>
        <button style={aboutStyle} class="about" onClick={props.closeDetails}>Close</button>
        <br />
        </div>
    );
}

export default JewelryDetail;

