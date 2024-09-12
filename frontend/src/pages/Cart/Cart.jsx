import React, { useContext } from "react";
import { StoreContext } from "../../context/StoreContext";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  // Access cart items, food list, remove from cart functionality from our context.
  const { cartItems, food_list, removeFromCart, getTotalCartAmount, url } =
    useContext(StoreContext);

  const navigate = useNavigate();

  return (
    <div className="mt-24 mx-4 flex justify-between">
      <div className="mb-20 flex-1 p-2">
        <div className="grid grid-cols-[1fr_1.5fr_1fr_1fr_1fr_0.5fr] items-center text-slate-900 text-[max(1vw,_12px)] mb-2">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <hr className="h-[1px] bg-gray-200 border-none mb-2" />

        {food_list.map((item) => {
          // if food item available in the cart item then displaying in the cart page.
          // if cart items containes one product with item's id in that case returning a div
          if (cartItems[item._id] > 0) {
            return (
              <div key={item._id} className="mb-2 text-black">
                <div className="grid grid-cols-[1fr_1.5fr_1fr_1fr_1fr_0.5fr] items-center gap-4 mb-2">
                  <img
                    src={url + "/images/" + item.image}
                    alt={item.name}
                    className="w-12"
                  />
                  <p>{item.name}</p>
                  <p>${item.price}</p>
                  <p>{cartItems[item._id]}</p> {/*Quantity*/}
                  <p>${item.price * cartItems[item._id]}</p> {/*Total*/}
                  <p
                    onClick={() => removeFromCart(item._id)}
                    className="text-xl cursor-pointer text-red-900 font-semibold"
                  >
                    X
                  </p>
                </div>
                <hr className="h-[1px] bg-gray-200 border-none mt-2" />
              </div>
            );
          }
        })}
      </div>

      <div className="flex flex-col gap-5 lg:flex-row lg:justify-between w-1/3 flex-1 p-2">
        <div className="flex-1 flex flex-col gap-5">
          <h2 className="text-2xl font-semibold">Cart Total</h2>
          <div className="flex flex-col gap-3">
            <div className="flex justify-between text-gray-700">
              <p>Subtotal</p>
              <p>${getTotalCartAmount()}</p>
            </div>
            <hr className="h-[1px] bg-gray-200 border-none" />
            <div className="flex justify-between text-gray-700">
              <p>Delivery Fee</p>
              <p>${getTotalCartAmount() === 0 ? 0 : 0}</p>
            </div>
            <hr className="h-[1px] bg-gray-200 border-none" />
            <div className="flex justify-between text-gray-900 font-bold">
              <b>Total</b>
              <b>${getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 0}</b>
            </div>
          </div>
          <button
            onClick={() => navigate("/order")}
            className="bg-red-500 text-white w-[max(15vw,_200px)] py-3 rounded-md hover:bg-red-600"
          >
            PROCEED TO CHECKOUT
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
