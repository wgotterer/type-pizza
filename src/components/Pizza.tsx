import React from "react";
import PizzaCss from "./Pizza.module.css";
import  { useStateDispatch } from "./AppState";

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
   const dispatch = useStateDispatch()

  const handleAddToCart = () => {
    dispatch({
        type: "ADD_TO_CART",
        payload: {
            item: {id: pizza.id, name: pizza.name, price: pizza.price}
        }
    })
  };

  return (
    <li className={PizzaCss.container}>
      <h2>{pizza.name}</h2>
      <p>{pizza.description}</p>
      <p>{pizza.price}</p>
      <button type="button" onClick={handleAddToCart}>
        Add To Cart
      </button>
    </li>
  );
};

export default Pizza;
