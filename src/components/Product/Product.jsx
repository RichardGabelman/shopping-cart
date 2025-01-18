import styles from "./Product.module.css";

function Product({ product, updateProductQuantity }) {
  const { id, title, image, price, quantity } = product;


  return(
    <article className={styles.productCard}>
      <img src={image} alt={title} className={styles.productImage}/>
      <h2>{title}</h2>
      <p>${price.toFixed(2)}</p>
      <div className={styles.qtyContainer}>
        <button onClick={() => updateProductQuantity(id, -1)}>-</button>
        <p>{quantity}</p>
        <button onClick={() => updateProductQuantity(id, 1)}>+</button>
      </div>
    </article>
  );
}

export default Product;