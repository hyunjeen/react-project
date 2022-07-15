import { useRef, useState } from "react";
import Input from "../../UI/Input";
import styles from "./MealItemForm.module.css";
const MealItemForm = (props) => {
  const [amountIsVaild, setAmountIsVaild] = useState(true);

  const amountRef = useRef();

  const submitHandler = (e) => {
    e.preventDefault();
    const enteredAmount = +amountRef.current.value.trim();

    if (enteredAmount < 1 || enteredAmount > 5) {
      setAmountIsVaild(false);
      return;
    }
    props.onAddToCart(enteredAmount);
  };

  return (
    <form className={styles.form} onSubmit={submitHandler}>
      <Input
        ref={amountRef}
        label="수량"
        input={{
          type: "number",
          id: `amount-${props.name}`,
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      ></Input>
      <button type="submit">+ Add</button>
      {!amountIsVaild && <p> please enter a vaild amount</p>}
    </form>
  );
};

export default MealItemForm;
