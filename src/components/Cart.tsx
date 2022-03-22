import React, {useState} from "react";
import { render } from "react-dom";
import CartCss from "./Cart.module.css";
import { FiShoppingCart } from "react-icons/fi";

interface Props {}

interface State {
  isOpen: boolean;
}

const Cart = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false)



    
        return (
          <div className={CartCss.cartContainer}>
            <button className={CartCss.button} type="button" onClick={() => {
                setIsOpen((prevState) => !prevState )
            }}>
              <FiShoppingCart />
              <span>2 pizza(s)</span>
            </button>
            <div className={CartCss.cartDropDown} style={{display: isOpen ? "block" : "none"}}>
              <ul>
                <li>Napoletana</li>
                <li>Marinara</li>
              </ul>
            </div>
          </div>
        );
      }



// class Cart extends React.Component<Props, State> {
//   constructor(props: Props) {
//     super(props);
//     this.state = {
//       isOpen: false,
//     };
//   }
//   render() {
//     return (
//       <div className={CartCss.cartContainer}>
//         <button className={CartCss.button} type="button" onClick={() => {
//             this.setState((prevState) => ({isOpen: !prevState.isOpen}))
//         }}>
//           <FiShoppingCart />
//           <span>2 pizza(s)</span>
//         </button>
//         <div className={CartCss.cartDropDown} style={{display: this.state.isOpen ? "block" : "none"}}>
//           <ul>
//             <li>Napoletana</li>
//             <li>Marinara</li>
//           </ul>
//         </div>
//       </div>
//     );
//   }
// }

export default Cart;
