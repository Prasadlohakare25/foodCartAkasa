import React, { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import ListSkeletonLoader from "../../components/ListSkeletonLoader/ListSkeletonLoader";

const List = ({ url }) => {
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchList = async () => {
    // Set loading to true before fetching
    setLoading(true);

    try {
      const response = await axios.get(`${url}/api/food/list`);
      if (response.data.success) {
        setList(response.data.data);
      } else {
        toast.error("Error");
      }
    } catch (error) {
      toast.error("Error fetching data");
    } finally {
      // Set loading to false after fetching
      setLoading(false);
    }
  };

  const removeFood = async (foodId) => {
    try {
      const response = await axios.post(`${url}/api/food/remove`, { id: foodId });
      // re-renders the list after removing any food items
      await fetchList();

      if (response.data.success) {
        toast.success(response.data.message);
      } else {
        toast.error("Error");
      }
    } catch (error) {
      toast.error("Error removing item");
    }
  };

  useEffect(() => {
    fetchList();
  }, []);

  return (
    <div className="flex flex-col">
      <p className="text-xl font-semibold mb-4 p-4">All Foods List</p>
      <div className="overflow-x-auto">
        <div className="hidden md:grid grid-cols-[0.5fr_2fr_1fr_1fr_0.1fr] items-center gap-6 m-3 p-3 border border-gray-300 text-xs bg-gray-50">
          <b>Image</b>
          <b>Name</b>
          <b>Category</b>
          <b>Price</b>
          <b>Action</b>
        </div>
        {loading ? (
          <ListSkeletonLoader /> // Render SkeletonLoader while loading
        ) : (
          list.map((item, index) => (
            <div
              key={index}
              className="grid grid-cols-[0.5fr_2fr_1fr_1fr_0.1fr] items-center gap-2 p-3 border border-gray-300 text-xs m-3"
            >
              <img
                src={`${url}/images/` + item.image}
                alt=""
                className="w-12 hidden md:block"
              />
              <p className="hidden md:block">{item.name}</p>
              <p className="hidden md:block">{item.category}</p>
              <p className="hidden md:block">${item.price}</p>
              <p
                onClick={() => removeFood(item._id)}
                className="cursor-pointer text-red-600"
              >
                Remove
              </p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default List;
