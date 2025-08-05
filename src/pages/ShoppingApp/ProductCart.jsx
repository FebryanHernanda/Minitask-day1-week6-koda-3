import { Trash } from "lucide-react";

const ProductCart = (props) => {
  const { cartData, setCart, setTotal, totalPrice } = props;

  const deleteCartItem = (data) => {
    setCart((prev) => prev.filter((item) => item.orderId !== data.orderId));
    setTotal((prevTotal) => prevTotal - data.harga);
  };

  return (
    <section className="p-5 h-full bg-white rounded-xl w-full flex flex-col gap-5 text-black ">
      <h1 className="text-5xl font-bold">Cart</h1>
      {cartData.length > 0 &&
        cartData.map((data, idx) => {
          return (
            <div
              key={idx}
              className="flex p-5 flex-col border-1 text-left rounded-md "
            >
              <h1>{`Nama : ${data.nama}`}</h1>
              <h1>{`Harga : ${data.harga}`}</h1>
              <button
                className="mt-5 bg-red-600 p-0.5 text-white rounded-md flex gap-5 justify-center items-center cursor-pointer"
                onClick={() => deleteCartItem(data)}
              >
                Delete from Cart
                <Trash size={15} />
              </button>
            </div>
          );
        })}
      <span className="items-end">Total Price : {totalPrice}</span>
    </section>
  );
};

export default ProductCart;
