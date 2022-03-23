import React from "react";
import PizzaCss from "./Pizza.module.css";
import { Pizza} from "../types"
import { useAddToCart } from "./AddToCart";

interface Props  {
  pizza: Pizza;
}

// FC is a functional component. interface accepts generic type parameter P for props.
const PizzaItem: React.FC<Props> = ({ pizza }) => {
const addToCart = useAddToCart()
  const handleAddToCart = () => {
    addToCart({id: pizza.id, name: pizza.name, price: pizza.price })
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

export default PizzaItem;
