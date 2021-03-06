import React from "react";
import { CartItem, useStateDispatch } from "./AppState";

export interface AddtoCartProps {
  addToCart: (item: Omit<CartItem, "quantity">) => void;
}

export function withAddToCart<OriginalProps extends AddtoCartProps>(
  ChildComponent: React.ComponentType<OriginalProps>
) {
  const AddToCartHOC = (props: Omit<OriginalProps, keyof AddtoCartProps>) => {
    const dispatch = useStateDispatch();
    const handleAddToCart: AddtoCartProps["addToCart"] = (item) => {
      dispatch({
        type: "ADD_TO_CART",
        payload: {
          item,
        },
      });
    };
    return (
      <ChildComponent
        {...(props as OriginalProps)}
        addToCart={handleAddToCart}
      />
    );
  };
  return AddToCartHOC;
}

export const WithAddToCartProps: React.FC<{
  children: (props: AddtoCartProps) => JSX.Element;
}> = ({ children }) => {
  const dispatch = useStateDispatch();

  const addToCart: AddtoCartProps["addToCart"] = (item) => {
    dispatch({
      type: "ADD_TO_CART",
      payload: {
        item,
      },
    });
  };
  return children({ addToCart });
};

export const useAddToCart = () => {
    const dispatch = useStateDispatch();
    const addToCart: AddtoCartProps["addToCart"] = (item) => {
      dispatch({
        type: "ADD_TO_CART",
        payload: {
          item,
        },
      });
    };
    return addToCart
}