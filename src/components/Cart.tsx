import React, { useState } from "react";
import { render } from "react-dom";
import CartCss from "./Cart.module.css";
import { FiShoppingCart } from "react-icons/fi";

interface Props {}

interface State {
  isOpen: boolean;
}

class Cart extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      isOpen: false,
    };
    this.handleClick = this.handleClick.bind(this)
  }

    handleClick(e: React.MouseEvent<HTMLButtonElement, MouseEvent> ){
        this.setState((prevState) => ({isOpen: !prevState.isOpen}))
      
  }
  render() {
    return (
      <div className={CartCss.cartContainer}>
        <button className={CartCss.button} type="button" onClick={(e) => {
            this.setState((prevState) => ({isOpen: !prevState.isOpen}))
        }}>
          <FiShoppingCart />
          <span>2 pizza(s)</span>
        </button>
        <div className={CartCss.cartDropDown} style={{display: this.state.isOpen ? "block" : "none"}}>
          <ul>
            <li>Napoletana</li>
            <li>Marinara</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Cart;
