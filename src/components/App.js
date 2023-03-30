import React from "react";
import Header from "./Header";
import JewelryControl from "./JewelryControl";
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
      </div>
    </React.Fragment>
  );
}

export default App;
