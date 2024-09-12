import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";
import { assets } from "../../assets/assets";
import OrderSkeletonLoader from "../../components/OrderSkeletonLoader/OrderSkeletonLoader";

const Orders = ({ url }) => {
  // State variable for storing data coming from backend API
  const [orders, setOrders] = useState([]);

  const [loading, setLoading] = useState(true);

  //
  const fetchAllOrders = async () => {
    // Set loading to true before fetching
    setLoading(true);

    try {
      const response = await axios.get(url + "/api/order/list");
      if (response.data.success) {
        setOrders(response.data.data);
        // console.log(response.data.data);
      } else {
        toast.error("Error!");
      }
    } catch (error) {
      toast.error("Error fetching data");
    } finally {
      // Set loading to true before fetching
      setLoading(false);
    }
  };

  // Update status Handler
  const statusHandler = async (e, orderId) => {
    try {
      const response = await axios.post(url + "/api/order/status", {
        orderId,
        status: e.target.value,
      });

      if (response.data.success) {
        await fetchAllOrders();
      }
    } catch (error) {
      toast.error("Error updating status");
    }
  };

  useEffect(() => {
    fetchAllOrders();
  }, []);

  return (
    <div className="flex flex-col m-3">
      <h3 className="text-2xl font-semibold mb-6">Order Page</h3>
      <div className="space-y-8">
        {loading ? (
          // Render SkeletonLoader while loading
          <OrderSkeletonLoader />
        ) : (
          orders.map((order, index) => (
            <div
              key={index}
              className="grid grid-cols-[0.5fr_2fr_1fr_1fr_1fr] items-start gap-6 border border-red-400 p-5 my-8 text-sm text-gray-600"
            >
              <img
                src={assets.parcel_icon}
                alt=""
                className="w-10 md:w-12"
              />
              <div>
                <p className="font-semibold">{order.items.map((item, index) => {
                  if (index === order.items.length - 1) {
                    return item.name + " x " + item.quantity;
                  } else {
                    return item.name + " x " + item.quantity + ", ";
                  }
                })}</p>

              </div>
              <div><p className="font-semibold mb-1">
                {order.address.firstName + " " + order.address.lastName}
              </p>
                <div className="mb-2">
                  <p>{order.address.street + ","}</p>
                  <p>
                    {order.address.city +
                      ", " +
                      order.address.state +
                      ", " +
                      order.address.country +
                      ", " +
                      order.address.zipcode}
                  </p>
                </div>
                <p>{order.address.phone}</p></div>
              <p>Items: {order.items.length}</p>
              <p>${order.amount}</p>
              {/* Select option to change the order status */}
              <select
                onChange={(e) => statusHandler(e, order._id)}
                value={order.status}
                className="bg-[#ffe8e4] border border-red-400 w-[max(10vw,120px)] p-2 outline-none text-sm"
              >
                <option value="Food Processing">Food Processing</option>
                <option value="Out for delivery">Out for delivery</option>
                <option value="Delivered">Delivered</option>
              </select>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Orders;
