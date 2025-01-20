import styles from "./CustomInput.module.css";
import PropTypes from "prop-types";

function CustomInput({ amount, setAmount }) {
  const updateAmount = (delta) => {
    setAmount((prevValue) => Math.max(prevValue + delta, 0));
  };

  return (
    <div className={styles.qtyContainer}>
      <button onClick={() => updateAmount(-1)}>-</button>
      <input
        className={styles.input}
        type="number"
        value={amount}
        onChange={(event) => setAmount(Math.max(event.target.value, 0))}
      />
      <button onClick={() => updateAmount(1)}>+</button>
    </div>
  );
}

CustomInput.propTypes = {
  amount: PropTypes.number.isRequired,
  setAmount: PropTypes.func.isRequired,
}

export default CustomInput;
