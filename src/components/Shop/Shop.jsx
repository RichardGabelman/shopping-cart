import { useOutletContext } from "react-router-dom";
import Product from "../Product/Product";
import styles from "./Shop.module.css";

function Shop() {
  const { products, updateProductQuantity } = useOutletContext();
  return (
    <section className={styles.cardContainer}>
      {products.map((product) => (
        <Product
          key={product.id}
          product={product}
          updateProductQuantity={updateProductQuantity}
        />
      ))}
    </section>
  );
}

export default Shop;
