import React from "react";
import PizzaCss from "./Pizza.module.css"

interface Pizza {
    id: number;
    name: string;
    description: string;
    price: number;
}

interface Props {
    pizza: Pizza
}

// FC is a functional component. interface accepts generic type parameter P for props. 
const Pizza: React.FC<Props> = ({pizza}) => {
    return (
       <li className={PizzaCss.container}>
           <h2>{pizza.name}</h2>
           <p>{pizza.description}</p>
           <p>{pizza.price}</p>
       </li> 
    )
    
}

export default Pizza