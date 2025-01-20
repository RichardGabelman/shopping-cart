import { useState } from "react";
import styles from "./Product.module.css";
import CustomInput from "./CustomInput/CustomInput.jsx";
import PropTypes from "prop-types";

function Product({ product, updateProductQuantity }) {
  const { id, title, image, price } = product;
  const [amount, setAmount] = useState(0);

  const handleAdd = () => {
    updateProductQuantity(id, amount);
    setAmount(0);
  };

  return (
    <article className={styles.productCard}>
      <img src={image} alt={title} className={styles.productImage} />
      <h2>{title}</h2>
      <p>${price.toFixed(2)}</p>
      <CustomInput amount={amount} setAmount={setAmount}></CustomInput>
      <button onClick={handleAdd}>Add to Cart</button>
    </article>
  );
}

Product.propTypes = {
  product: PropTypes.object.isRequired,
  updateProductQuantity: PropTypes.func.isRequired,
}

export default Product;
