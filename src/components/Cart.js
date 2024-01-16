import { useDispatch, useSelector } from "react-redux";
import ItemsList from "./ItemsList";
import cartSlice, { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  //   console.log(cartItems);

  const dispatch = useDispatch();

  const handlClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div className="text-center m-4 p-4">
      <h1 className="text-2xl font-bold">Cart</h1>
      <div className="w-6/12 m-auto">
        <button
          className="p-2 m-2 bg-black text-white rounded-lg"
          onClick={handlClearCart}
        >
          Clear Cart
        </button>

        {cartItems.length === 0 && (
          <h2 className="font-bold text-lg">Add items to your Cart</h2>
        )}

        <ItemsList items={cartItems} />
      </div>
    </div>
  );
};

export default Cart;
