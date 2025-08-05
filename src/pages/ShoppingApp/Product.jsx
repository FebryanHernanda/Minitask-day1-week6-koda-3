import { ShoppingCart } from "lucide-react";

const Product = (props) => {
  const { setCart, setTotal } = props;

  const productData = [
    {
      id: 1,
      nama: "Buku",
      harga: 5_000,
    },
    {
      id: 2,
      nama: "Pensil",
      harga: 2_000,
    },
    {
      id: 3,
      nama: "Penghapus",
      harga: 2_500,
    },
  ];

  const handleCart = (data) => {
    if (data !== null) {
      setCart((prev) => {
        const orderId = Math.floor(Math.random() * 100000) + 1;
        return [...prev, { orderId, nama: data.nama, harga: data.harga }];
      });
    }
    setTotal((prevTotal) => prevTotal + data.harga);
  };

  return (
    <section className="p-5 bg-white rounded-xl w-full flex flex-col gap-5 text-black ">
      <h1 className="text-5xl font-bold">Product</h1>
      {productData.map((data) => {
        return (
          <div
            key={data.id}
            className="flex p-5 flex-col border-1 text-left rounded-md "
          >
            <h1>{`Nama : ${data.nama}`}</h1>
            <h1>{`Harga : ${data.harga}`}</h1>
            <button
              className="bg-blue-600 mt-5 p-0.5 text-white rounded-md flex gap-5 justify-center items-center cursor-pointer"
              onClick={() => handleCart(data)}
            >
              Add to Cart
              <ShoppingCart size={15} />
            </button>
          </div>
        );
      })}
    </section>
  );
};

export default Product;
