import React, {useState} from "react";
// import JewelryCategory from "./JewelryCategory";
import JewelryList from "./JewelryList";
import Cart from "./Cart";
import AboutMe from "./AboutMe"
import 'bootstrap/dist/css/bootstrap.min.css';
import "./ButtonCss.css";

const cartButton = {
  float: "right",
  right: "5%",
}

const aboutStyle = {
  float: "right",
  right: "5%",
}

function JewelryControl() {
  

  const [jewelry, setJewelry] = useState([]);
  const [totalItems, setTotalItems] = useState(0);
  const [showCart, setShowCart] = useState(false);
  const [showMe, setShowMe] = useState(false);


  // Add a jewelry item to the shopping cart
  const addToCart = (jewelryItem) => {
    setJewelry(prevJewelryItems=>[...prevJewelryItems, jewelryItem]);
    setTotalItems(prevTotalItems => prevTotalItems + 1);
  }

  // Remove a jewelry item from the shopping cart
  const removeFromCart = (jewelryItem) => {
    const newJewelry = jewelry.filter((j) => j !== jewelryItem);
    setJewelry(newJewelry);
    setTotalItems(prevTotalItems => prevTotalItems - 1);
  }

  // Calculate the total price of all jewelry items in the shopping cart
  const totalPrice = jewelry.reduce((acc, curr) => acc + curr.price, 0);

  return (
    <div>
      <button class="about" style={aboutStyle} onClick={() => setShowMe(!showMe)}>About Me!</button> 
      <button style={cartButton} class="button-64" onClick={() => setShowCart(!showCart)}>View Cart({totalItems})</button>
      <br />
      <br />
      <hr />
      {showMe ? (
        <AboutMe />
      ): showCart ? (
        <Cart jewelry={jewelry} removeFromCart={removeFromCart} totalPrice={totalPrice} />
      ) : (
        <JewelryList addToCart={addToCart} />
      )}
    </div>
  );
}

export default JewelryControl;



