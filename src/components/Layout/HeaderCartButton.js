import { useContext } from "react";
import CartIcon from "../Cart/CartIcon";
import CartContext from "../store/cart-context";
import styles from "./HeaderCartButton.module.css";
const HeaderCartButton = (props) => {
  const cartCtx = useContext(CartContext);
  const numOfCartItems = cartCtx.item.reduce((cur, item) => {
    return cur + item.amount;
  }, 0);

  return (
    <button className={styles.button} onClick={props.onClick}>
      <span className={styles.icon}>
        <CartIcon></CartIcon>
      </span>
      <span>Your Cart</span>
      <span className={styles.badge}>{numOfCartItems}</span>
    </button>
  );
};

export default HeaderCartButton;
