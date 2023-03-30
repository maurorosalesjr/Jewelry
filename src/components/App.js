import React from "react";
import Header from "./Header";
import JewelryControl from "./JewelryControl";
import Footer from "./Footer"
import PropTypes from "prop-types"

const bodyStyle = {
  paddingTop: "3%",
  paddingLeft: "3%",
  paddingRight: "3%",

}

const background = {
  backgroundColor: "#d8b1f7"
}
function App() {
  return (
    <React.Fragment>
      <Header />
      <div style={bodyStyle}>
      <JewelryControl  />
      <hr/>
      </div>
      <Footer />
    </React.Fragment>
  );
}

export default App;
