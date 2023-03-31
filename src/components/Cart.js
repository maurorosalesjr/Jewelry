import React from 'react';
import "./ButtonCss.css";

const imgStyler ={
    maxWidth: "10%",
    display: "block",
    float: "left",
    marginRight: "5%",
    }

const infoClickable = {
    display: "block",
    justifyText: "left",
    marginRight: "1%",
    marginBottom: "10%",
    marginLeft: "13%",
    fontFamily: "cursive",
    color: "#a23cf0",
}

const buttonFloat = {
    float: "right",
}

const headerStyles = {
    fontFamily: "cursive",
    color: "#a23cf0",
    textDecoration: "underline",
    marginBottom: "10%",
    textAlign: "center"
}


function Cart(props) {
    // const [totalCartIems, setTotalCartItems] = useState(0);
    

    return (
        <React.Fragment>
        <h2 style={headerStyles}>Shopping Cart</h2>
        {props.jewelry.map((jewelryItems) => (
            <div key={jewelryItems.id}>
                <img src={jewelryItems.photo} style={imgStyler}/>
                <div style={infoClickable}>
                <p>{jewelryItems.name} - ${jewelryItems.price}</p>
                <p>{jewelryItems.desc}  <button class="button-82-pushable" style={buttonFloat}onClick={() => props.removeFromCart(jewelryItems)}>
                <span class="button-82-shadow"></span>
                <span class="button-82-edge"></span>
                <span class="button-82-front text">
                Remove from Cart</span></button></p>
                </div>
            </div>
        ))}
        <p>Total Price: ${props.totalPrice}</p>
        </React.Fragment>
    );
    }

export default Cart;

{

}