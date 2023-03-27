import React from "react";
import Jewelry from "./Jewelry";
import JewelryCategory from "./JewelryCategory";
import JewelryDetail from "./JewelryDetail";
import JewelryList from "./JewelryList;";
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
    } else {
      currentlyVisibleState = <JewelryList jewelryList={this.state.mainJewelryList}
                                            onJewelrySelection={this.handleChangingSelectedJewelry} />;
    }


    return (
      <React.Fragment>

      </React.Fragment>
    );
  }

  
}