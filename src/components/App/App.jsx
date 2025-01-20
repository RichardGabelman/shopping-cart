import { useEffect, useState } from "react";
import "./App.css";
import Header from "../Header/Header";
import { Outlet } from "react-router-dom";

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchDataForProducts = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        if (!response.ok) {
          throw new Error(`HTTP error: Status ${response.status}`);
        }
        let productData = await response.json();
        productData = productData.map((product) => ({
          ...product,
          quantity: 0,
        }));
        setProducts(productData);
      } catch (err) {
        console.log(err);
      }
    };

    fetchDataForProducts();
  }, []);

  const quantityInCart = products.reduce(
    (sum, product) => sum + product.quantity,
    0
  );

  const updateProductQuantity = (id, delta) => {
    setProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.id === id
          ? { ...product, quantity: Math.max(product.quantity + delta, 0) }
          : product
      )
    );
  };

  const checkout = () => {
    const resetProducts = products.map((product) => ({
      ...product,
      quantity: 0,
    }));
    setProducts(resetProducts);
  };

  return (
    <>
      <Header quantity={quantityInCart} />
      <main>
        <Outlet context={{ products, updateProductQuantity, checkout }} />
      </main>
      <footer>
        <div>Copyright &copy; {new Date().getFullYear()} Richard Gabelman</div>
      </footer>
    </>
  );
}

export default App;
