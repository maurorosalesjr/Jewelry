import React, {useState} from "react";
// import JewelryCategory from "./JewelryCategory";
import JewelryDetail from "./JewelryDetail";
import JewelryList from "./JewelryList";
import mainJewelryList from "./MainJewelryList";
import Cart from "./Cart"
import 'bootstrap/dist/css/bootstrap.min.css'

function JewelryControl() {
  

  const [jewelry, setJewelry] = useState([]);
  const [showCart, setShowCart] = useState(false);

  // Add a jewelry item to the shopping cart
  const addToCart = (jewelryItem) => {
    setJewelry([...jewelry, jewelryItem]);
  }

  // Remove a jewelry item from the shopping cart
  const removeFromCart = (jewelryItem) => {
    const newJewelry = jewelry.filter((j) => j !== jewelryItem);
    setJewelry(newJewelry);
  }

  // Calculate the total price of all jewelry items in the shopping cart
  const totalPrice = jewelry.reduce((acc, curr) => acc + curr.price, 0);

  return (
    <div>
      <h1>My Jewelry Store</h1>
      <button onClick={() => setShowCart(!showCart)}>Cart</button>
      {showCart ? (
        <Cart jewelry={jewelry} removeFromCart={removeFromCart} totalPrice={totalPrice} />
      ) : (
        <JewelryList addToCart={addToCart} />
      )}
    </div>
  );
}

export default JewelryControl;