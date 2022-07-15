import Modal from "../UI/Modal";
import styles from "./Cart.module.css";

const Cart = (props) => {
  const cartItem = [{ id: "c1", name: "Susjo", amount: 2, price: 12.99 }].map(
    (item) => {
      return <li key={item.id}>{item.name}</li>;
    }
  );
  return (
    <Modal onClose={props.onClose}>
      <ul className={styles["cart-items"]}>{cartItem}</ul>
      <div className={styles.total}>
        <span>Total Amount</span>
        <span>35.62</span>
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
