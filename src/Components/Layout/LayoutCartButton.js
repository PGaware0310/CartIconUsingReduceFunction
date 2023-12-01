import { useContext } from "react";
import CartIcon from "../Cart/CartIcon";
import classes from "./LayoutCartButton.module.css";
import CartContext from "../../store/cart-context";

const LayoutCartButton = (props) => {
  const cartCtx = useContext(CartContext);

  const numberOfCartItems = cartCtx.items.reduce((curNum, item) => {
    return curNum+item;
  }, 0);
  return (
    <button className={classes.button} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
  );
};

export default LayoutCartButton;
