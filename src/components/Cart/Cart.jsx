import { useOutletContext } from "react-router-dom";
import Product from "../Product/Product";
import styles from "./Cart.module.css";

const TAX_RATE = 0.1;

function Cart() {
  const { products } = useOutletContext();

  const subtotal = products.reduce(
    (sum, product) => sum + product.quantity * product.price,
    0
  );

  const taxes = subtotal * TAX_RATE;
  const total = subtotal + taxes;

  return (
    <div className={styles.cartContainer}>
      <section className={styles.cartItems}>
        <div className={styles.heading}>
          <h2>Shopping Cart</h2>
        </div>
        <table className={styles.productList}>
          <thead className={styles.thead}>
            <tr>
              <th className={styles.th}>Product Details</th>
              <th className={styles.th}>Quantity</th>
              <th className={styles.th}>Price</th>
              <th className={styles.th}>Total</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.id}>
                <td className={styles.td}>
                  <div className={styles.productDetails}>
                    <img src={product.image} alt={product.title} style={{width: "50px"}}/>
                    <span>{product.title}</span>
                  </div>
                </td>
                <td className={styles.td}>{product.quantity}</td>
                <td className={styles.td}>${product.price.toFixed(2)}</td>
                <td className={styles.td}>${(product.price * product.quantity).toFixed(2)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
      <section className={styles.cartSummary}>
        <h2>Order Summary</h2>
        <div>
          <div className={styles.lines}>
            <div className={styles.summaryLine}>
              <h3>Subtotal:</h3>
              <p>${subtotal}</p>
            </div>
            <div className={styles.summaryLine}>
              <h3>Taxes:</h3>
              <p>${taxes.toFixed(2)}</p>
            </div>
            <div className={styles.summaryLine}>
              <h3>Total:</h3>
              <p>${total.toFixed(2)}</p>
            </div>
          </div>
        </div>
        <button>Checkout</button>
      </section>
    </div>
  );
}

export default Cart;
