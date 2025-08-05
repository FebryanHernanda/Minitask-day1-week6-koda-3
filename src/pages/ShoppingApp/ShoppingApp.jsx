import { useState } from "react";
import Product from "./Product";
import ProductCart from "./ProductCart";
import { Link } from "react-router";
import { ArrowBigLeft } from "lucide-react";

const ShoppingApp = () => {
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(null);

  return (
    <div className="w-full text-center flex flex-col gap-10 font-bold mt-10">
      <h1 className="text-7xl">Shopping App</h1>
      <div className="flex justify-between w-full gap-10 mt-10">
        <Product setCart={setCart} setTotal={setTotal} />

        <ProductCart
          cartData={cart}
          setCart={setCart}
          setTotal={setTotal}
          totalPrice={total}
        />
      </div>
      <Link className="mx-auto flex flex-col gap-5 mt-10 items-center" to="/">
        <ArrowBigLeft size={100} />
        Back to Home
      </Link>
    </div>
  );
};

export default ShoppingApp;
