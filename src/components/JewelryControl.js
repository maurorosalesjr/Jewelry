import React from "react";
// import JewelryCategory from "./JewelryCategory";
import JewelryDetail from "./JewelryDetail";
import JewelryList from "./JewelryList";
import mainJewelryList from "./MainJewelryList";
import Cart from "./Cart"
import 'bootstrap/dist/css/bootstrap.min.css'

class JewelryControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mainJewelryList: mainJewelryList,
      selectedJewelry: null,
      cartView: false,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  
  handleClick = () => {
    if(this.state.selectedJewelry != null){
      this.setState({
        selectedJewelry: null,
        cartVeiw: false,
      })
    } else {
      this.setState(prevState => ({
        cartVeiw: !prevState.cartVeiw,
      }));
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

  handleCartView = () => {
    const newCart = this.state.cartView;
    console.log("cart view reached")
    this.setState({
      cartView: newCart,
      selectedJewelry: null,
    });
  }

  addJewelry = (jewelry) => {
    this.setState([...jewelry, jewelry]);
    console.log("added jewelry!")
}

  render(){
    let currentlyVisibleState = null;
    let buttonText = null;
    if (this.state.selectedJewelry != null) {
      currentlyVisibleState = <JewelryDetail jewerly={this.state.selectedJewelry}
                                              onClickingSubtract = {this.handleQuantitySub} />
      buttonText = "Back"
    } else if(this.state.cartView) {
      currentlyVisibleState = <Cart cart={this.state.cartView} />
      buttonText = "Checkout"
    } else {
      currentlyVisibleState = <JewelryList jewelryList={this.state.mainJewelryList}
                                            onJewelrySelection={this.handleChangingSelectedJewelry} 
                                            onClickingSubtract = {this.handleQuantitySub} 
                                            onClickingCart = {this.handleCartView}/>;
                                            buttonText="Nothing"
    }


    return (
      <React.Fragment>
        {currentlyVisibleState}
        <button onClick={this.handleClick}>{buttonText}</button>
        <button onClick={this.handleCartView}>Cart</button>
      </React.Fragment>
    );
  }

  
}

export default JewelryControl;