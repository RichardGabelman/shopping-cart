import { useOutletContext } from "react-router-dom";
import Product from "../Product/Product";

function Shop() {
  const products = useOutletContext();
  return (
    <>
      {products.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </>
  );
}

export default Shop;
