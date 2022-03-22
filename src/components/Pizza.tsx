import React from "react";
import PizzaCss from "./Pizza.module.css";
import AppSetState, { AppSetStateContext, useSetState } from "./AppState";

interface Pizza {
  id: number;
  name: string;
  description: string;
  price: number;
}

interface Props {
  pizza: Pizza;
}

// FC is a functional component. interface accepts generic type parameter P for props.
const Pizza: React.FC<Props> = ({ pizza }) => {
  const setState = useSetState();

  const handleAddToCart = () => {
    setState((state) => {
      return {
        ...state,
        cart: {
          ...state.cart,
          items: [
            ...state.cart.items,
            { id: pizza.id, name: pizza.name, price: pizza.price },
          ],
        },
      };
    });
  };
  
  return (
    <li className={PizzaCss.container}>
      <h2>{pizza.name}</h2>
      <p>{pizza.description}</p>
      <p>{pizza.price}</p>
      <button type="button" onClick={handleAddToCart}>Add To Cart</button>
    </li>
  );
};

export default Pizza;
