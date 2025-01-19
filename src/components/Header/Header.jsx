import { Link } from "react-router-dom";
import styles from "./Header.module.css";

function Header({ quantity }) {
  return (
    <header className={styles.header}>
      <Link to="/">
        <div className={styles.titleLogo}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="60"
            height="60"
          >
            <title>Cadabra Logo</title>
            <path d="M7.5,5.6L5,7L6.4,4.5L5,2L7.5,3.4L10,2L8.6,4.5L10,7L7.5,5.6M19.5,15.4L22,14L20.6,16.5L22,19L19.5,17.6L17,19L18.4,16.5L17,14L19.5,15.4M22,2L20.6,4.5L22,7L19.5,5.6L17,7L18.4,4.5L17,2L19.5,3.4L22,2M13.34,12.78L15.78,10.34L13.66,8.22L11.22,10.66L13.34,12.78M14.37,7.29L16.71,9.63C17.1,10 17.1,10.65 16.71,11.04L5.04,22.71C4.65,23.1 4,23.1 3.63,22.71L1.29,20.37C0.9,20 0.9,19.35 1.29,18.96L12.96,7.29C13.35,6.9 14,6.9 14.37,7.29Z" />
          </svg>
          <h1>Cadabra</h1>
        </div>
      </Link>
      <nav className={styles.nav}>
        <ul className={styles.ul}>
          <li className={styles.li}>
            <Link to="/" className={styles.link}>
              Home
            </Link>
          </li>
          <li className={styles.li}>
            <Link to="shop" className={styles.link}>
              Shop
            </Link>
          </li>
          <li className={styles.li}>
            <Link to="cart" className={styles.link}>
              <div className={styles.cartLink}>
                <div className={styles.quantityBackground}>{quantity}</div>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="35" fill="white">
                  <title>cart-outline</title>
                  <path d="M17,18A2,2 0 0,1 19,20A2,2 0 0,1 17,22C15.89,22 15,21.1 15,20C15,18.89 15.89,18 17,18M1,2H4.27L5.21,4H20A1,1 0 0,1 21,5C21,5.17 20.95,5.34 20.88,5.5L17.3,11.97C16.96,12.58 16.3,13 15.55,13H8.1L7.2,14.63L7.17,14.75A0.25,0.25 0 0,0 7.42,15H19V17H7C5.89,17 5,16.1 5,15C5,14.65 5.09,14.32 5.24,14.04L6.6,11.59L3,4H1V2M7,18A2,2 0 0,1 9,20A2,2 0 0,1 7,22C5.89,22 5,21.1 5,20C5,18.89 5.89,18 7,18M16,11L18.78,6H6.14L8.5,11H16Z" />
                </svg>
              </div>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
