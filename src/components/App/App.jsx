import { useState } from "react";
import "./App.css";
import Header from "../header/Header";
import { Outlet } from "react-router-dom";

function App() {
  const [quantityInCart, setQuanityInCart] = useState(0);
  return (
    <>
      <Header quanity={quantityInCart}/>
      <Outlet />
    </>
  );
}

export default App;
