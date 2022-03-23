import React, { createRef } from "react";
import { render } from "react-dom";
import CartCss from "./Cart.module.css";
import { FiShoppingCart } from "react-icons/fi";
import { AppStateContext } from "./AppState";

interface Props {}

interface State {
  isOpen: boolean;
}

class Cart extends React.Component<Props, State> {
  #containerRef: React.RefObject<HTMLDivElement>;
  constructor(props: Props) {
    super(props);
    this.state = {
      isOpen: false,
    };
    this.#containerRef = createRef()
  }

  handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    if (e.target) this.setState((prevState) => ({ isOpen: !prevState.isOpen }));
  };

  componentDidMount() {
    document.addEventListener("mousedown", (e) => {
      if (
        this.#containerRef.current &&
        !this.#containerRef.current.contains(e.target as Node)
      )
        this.setState({ isOpen: false });
    });
  }

  render() {
    return (
      <AppStateContext.Consumer>
        {(state) => {
          const itemsCount = state.cart.items.reduce((sum, item) => {
            return sum + item.quantity;
          }, 0);
          return (
            <div className={CartCss.cartContainer} ref={this.#containerRef}>
              <button
                className={CartCss.button}
                type="button"
                onClick={this.handleClick}
              >
                <FiShoppingCart />
                <span>{itemsCount} pizza(s)</span>
              </button>
              <div
                className={CartCss.cartDropDown}
                style={{ display: this.state.isOpen ? "block" : "none" }}
              >
                <ul>
                  {state.cart.items.map((item) => {
                    return (
                      <li key={item.id}>
                        {item.name} &times; {item.quantity}
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          );
        }}
      </AppStateContext.Consumer>
    );
  }
}

export default Cart;
