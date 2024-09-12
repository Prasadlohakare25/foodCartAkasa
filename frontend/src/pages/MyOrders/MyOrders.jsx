import React, { useContext, useState, useEffect } from "react";
import { StoreContext } from "../../context/StoreContext";
import axios from "axios";
import { assets } from "../../assets/assets";

const MyOrders = () => {
  // Fetch all the user's data and save in one state variable.
  const { url, token } = useContext(StoreContext);
  const [data, setData] = useState([]);

  // Calling User Order API from API
  const fetchOrders = async () => {
    const response = await axios.post(
      url + "/api/order/userorders",
      {},
      { headers: { token } }
    );

    // Saving the user's order data in the data state var.
    setData(response.data.data);
  };

  useEffect(() => {
    if (token) {
      fetchOrders();
    }
  }, [token]);

  return (
    <div className="my-orders mt-[50px] mb-[50px] mx-4">
      <h2 className="text-2xl font-bold">My Orders</h2>
      <div className="container mt-[30px] flex flex-col gap-[20px]">
        {data.map((order, index) => (
          <div
            key={index}
            className="my-orders-order grid grid-cols-[0.5fr_2fr_1fr_1fr_2fr_1fr] gap-[30px] p-[10px_20px] text-[#454545] border border-tomato text-[14px]"
          >
            <img
              src={assets.bag_icon}
              alt=""
              className="w-[50px]"
            />
            {/* Displaying the name and quantity */}
            <p>
              {order.items.map((item, index) => (
                <React.Fragment key={item._id}>
                  {item.name} x {item.quantity}
                  {index !== order.items.length - 1 ? ", " : ""}
                </React.Fragment>
              ))}
            </p>
            <p>${order.amount}.00</p>
            <p>Items: {order.items.length}</p>
            <p>
              <span className="text-red-400">&#x25cf;</span>
              <b>{order.status}</b>
            </p>
            <button
              onClick={fetchOrders}
              className="border-none p-[12px_5px] rounded-md bg-[#ffe1e1] cursor-pointer text-[#454545]"
            >
              Track Order
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyOrders;
