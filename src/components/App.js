import React from "react";
import Header from "./Header";
import JewelryControl from "./JewelryControl";
import Cart from "./Cart";
import PropTypes from "prop-types"

const bodyStyle = {
  marginTop: "3%",
}
function App() {
  return (
    <React.Fragment>
      <Header />
      <div style={bodyStyle}>
      <JewelryControl />
      <hr/>
      <Cart/>
      </div>
    </React.Fragment>
  );
}

export default App;
