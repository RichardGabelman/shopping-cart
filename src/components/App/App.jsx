import { useState } from "react";
import "./App.css";
import Header from "../Header/Header";
import { Outlet } from "react-router-dom";

const defaultProducts = [
  {
    id: 1,
    title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    price: 109.95,
    quantity: 0,
  },
  {
    id: 2,
    title: "Mens Casual Premium Slim Fit T-Shirts ",
    price: 22.3,
    image:
      "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
    quantity: 0,
  },
];

function App() {
  const [products, setProducts] = useState(defaultProducts);

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

  return (
    <>
      <Header quantity={quantityInCart} />
      <main>
        <Outlet context={{products, updateProductQuantity}} />
      </main>
      <footer>
        <div>Copyright &copy; {new Date().getFullYear()} Richard Gabelman</div>
      </footer>
    </>
  );
}

export default App;
