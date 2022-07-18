import { useContext, useEffect, useState } from "react";
import CartIcon from "../Cart/CartIcon";
import CartContext from "../store/cart-context";
import styles from "./HeaderCartButton.module.css";
const HeaderCartButton = (props) => {
  const [btnIsHighlighted, setBtnHighlighted] = useState(false);
  const cartCtx = useContext(CartContext);
  const numOfCartItems = cartCtx.items.reduce((cur, item) => {
    return cur + item.amount;
  }, 0);
  const btnClasses = `${styles.button} ${btnIsHighlighted ? styles.bump : ""}`;
  useEffect(() => {
    if (cartCtx.items.length === 0) {
      return;
    }
    setBtnHighlighted(true);
    const timmer = setTimeout(() => {
      setBtnHighlighted(false);
    }, 300);
    return () => {
      clearTimeout(timmer);
    };
  }, [cartCtx.items]);
  return (
    <button className={btnClasses} onClick={props.onClick}>
      <span className={styles.icon}>
        <CartIcon></CartIcon>
      </span>
      <span>Your Cart</span>
      <span className={styles.badge}>{numOfCartItems}</span>
    </button>
  );
};

export default HeaderCartButton;
