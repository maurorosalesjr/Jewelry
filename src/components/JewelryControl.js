import React from "react";
// import JewelryCategory from "./JewelryCategory";
import JewelryDetail from "./JewelryDetail";
import JewelryList from "./JewelryList";
import mainJewelryList from "./MainJewelryList";

class JewelryControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mainJewelryList: mainJewelryList,
      selectedJewelry: null,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick = () => {
    if(this.state.selectedJewelry != null){
      this.setState({
        selectedJewelry: null,
      })
    } 
  }

  handleChangingSelectedJewelry = (id) => {
    const selectedJewelry = this.state.mainJewelryList.filter(jewelry => jewelry.id === id)[0];
    this.setState({selectedJewelry: selectedJewelry});
  }

  render(){
    let currentlyVisibleState = null;
    let buttonText = null;
    if (this.state.selectedJewelry != null) {
      currentlyVisibleState = <JewelryDetail jewerly={this.state.selectedJewelry}
                              />
      buttonText = "Back"
    } else {
      currentlyVisibleState = <JewelryList jewelryList={this.state.mainJewelryList}
                                            onJewelrySelection={this.handleChangingSelectedJewelry} />;
      buttonText = "idk what this button does"
    }


    return (
      <React.Fragment>
        {currentlyVisibleState}
        <button onClick={this.handleClick}>{buttonText}</button>
      </React.Fragment>
    );
  }

  
}

export default JewelryControl;