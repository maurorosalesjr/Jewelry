import React from "react";
// import JewelryCategory from "./JewelryCategory";
import JewelryDetail from "./JewelryDetail";
import JewelryList from "./JewelryList";
import mainJewelryList from "./MainJewelryList";
import 'bootstrap/dist/css/bootstrap.min.css'

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

  handleQuantitySub = (id) => {
    const sellJewel = this.state.mainJewelryList.filter(jewelry => jewelry.id ===id)[0];

    if(sellJewel.quantity > 0) {
      const sold= sellJewel.quantity -1;
      const soldJewel = {...sellJewel, quantity: sold}
      const newMainJewelryList = this.state.mainJewelryList.filter(jewelry => jewelry.id !== id).concat(soldJewel)
        this.setState({
          mainJewelryList: newMainJewelryList,
          selectedJewelry: null,
        });
    } else {
      const newMainJewelryList = this.state.mainJewelryList.filter(jewelry => jewelry.id !== id);
      this.setState({
        mainJewelryList: newMainJewelryList,
        selectedJewelry: null,
      })
    }
  }

  render(){
    let currentlyVisibleState = null;
    let buttonText = null;
    if (this.state.selectedJewelry != null) {
      currentlyVisibleState = <JewelryDetail jewerly={this.state.selectedJewelry}
                                              onClickingSubtract = {this.handleQuantitySub} />
      buttonText = "Back"
    } else {
      currentlyVisibleState = <JewelryList jewelryList={this.state.mainJewelryList}
                                            onJewelrySelection={this.handleChangingSelectedJewelry} 
                                            onClickingSubtract = {this.handleQuantitySub} />;
      buttonText = "this button does nothing"
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