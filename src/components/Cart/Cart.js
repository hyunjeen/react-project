import { useContext } from "react";
import CartContext from "../store/cart-context";
import Modal from "../UI/Modal";
import styles from "./Cart.module.css";
import CartItem from "./CartItem";

const Cart = (props) => {
  const cartCtx = useContext(CartContext);
  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };

  const cartItemAddHandler = (item) => {
    cartCtx.addItem({ ...item, amount: 1 });
  };
  const TotalAmount = cartCtx.totalAmount.toFixed(2);
  const cartItem = cartCtx.items.map((item) => {
    return (
      <CartItem
        {...item}
        key={item.id}
        onAdd={cartItemAddHandler.bind(null, item)}
        onRemove={cartItemRemoveHandler.bind(null, item.id)}
      ></CartItem>
    );
  });
  return (
    <Modal onClose={props.onClose}>
      <ul className={styles["cart-items"]}>{cartItem}</ul>
      <div className={styles.total}>
        <span>Total Amount</span>
        <span>{TotalAmount}</span>
      </div>
      <div className={styles.actions}>
        <button className={styles["button--alt"]} onClick={props.onClose}>
          close
        </button>
        <button className={styles.button}>Order</button>
      </div>
    </Modal>
  );
};

export default Cart;
