import styles from "./Product.module.css";

function Product({ product }) {
  const id = product.id;
  const title = product.title;
  const image = product.image;
  const price = product.price;
  const quantity = product.quantity;


  return(
    <article className={styles.productCard}>
      <img src={image} alt={title} className={styles.productImage}/>
      <h2>{title}</h2>
      <p>${price}</p>
      <div className={styles.qtyContainer}>
        <button>-</button>
        <p>{quantity}</p>
        <button>+</button>
      </div>
    </article>
  );
}

export default Product;