import React from "react";
import Header from "./Header";
import JewelryControl from "./JewelryControl";

const bodyStyle = {
  marginTop: "3%",
}
function App() {
  return (
    <React.Fragment>
      <Header />
      <div style={bodyStyle}>
      <JewelryControl />
      </div>
    </React.Fragment>
  );
}

export default App;
