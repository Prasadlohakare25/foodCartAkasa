import React, { useState } from "react";
import { assets } from "../../assets/assets";
import axios from "axios";
import { toast } from "react-toastify";

const Add = ({ url }) => {
  const [image, setImage] = useState(false);
  const [data, setData] = useState({
    name: "",
    description: "",
    price: "",
    category: "Salad",
  });

  const onChangeHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setData((data) => ({ ...data, [name]: value }));
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("description", data.description);
    formData.append("price", Number(data.price));
    formData.append("category", data.category);
    formData.append("image", image);

    try {
      const response = await axios.post(`${url}/api/food/add`, formData);
      if (response.data.success) {
        setData({
          name: "",
          description: "",
          price: "",
          category: "Salad",
        });
        setImage(false);
        toast.success(response.data.message);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      toast.error("Something went wrong!");
    }
  };

  return (
    <div className="w-[70%] ml-[max(5vw,_25px)] mt-[50px] text-[#6d6d6d] text-[16px]">
      <form className="flex flex-col  border-slate-800 border-2 shadow-lg shadow-black p-4 items-center text-center gap-[20px]" onSubmit={onSubmitHandler}>
        <div className="flex flex-col gap-2">
          <p className="font-semibold text-slate-900 text-xl">Upload Image</p>
          <label htmlFor="image" className="cursor-pointer w-20 rounded-lg border-slate-700 border-2">
            <img
              src={image ? URL.createObjectURL(image) : assets.upload_area}
              alt=""
              className="w-28 items-center align-middle"
            />
          </label>
          <input
            onChange={(e) => setImage(e.target.files[0])}
            type="file"
            id="image"
            hidden
            required
          />
        </div>

        <div className="flex flex-col w-[min(40%,_280px)]">
          <p className="font-semibold text-slate-900">Product name</p>
          <input
            onChange={onChangeHandler}
            value={data.name}
            type="text"
            name="name"
            placeholder="Type here"
            className="p-[10px] border-slate-700 border-2"
          />
        </div>

        <div className="flex flex-col w-[min(40%,_280px)]">
          <p className="font-semibold text-slate-900">Product description</p>
          <textarea
            onChange={onChangeHandler}
            value={data.description}
            name="description"
            rows="6"
            placeholder="Write content here"
            required
            className="p-[10px] border-slate-700 border-2"
          ></textarea>
        </div>

        <div className="flex gap-[30px]">
          <div className="flex flex-col w-[max-content]">
            <p className="font-semibold text-slate-900">Product Category</p>
            <select
              onChange={onChangeHandler}
              name="category"
              className="max-w-[120px] p-[10px] border-slate-700 border-2"
            >
              <option value="Salad">Salad</option>
              <option value="Rolls">Rolls</option>
              <option value="Deserts">Deserts</option>
              <option value="Sandwich">Sandwich</option>
              <option value="Cake">Cake</option>
              <option value="Pure Veg">Pure Veg</option>
              <option value="Pasta">Pasta</option>
              <option value="Noodles">Noodles</option>
              <option value="Non Veg">Non Veg</option>
            </select>
          </div>

          <div className="flex flex-col w-[max-content]">
            <p className="font-semibold text-slate-900">Product Price</p>
            <input
              onChange={onChangeHandler}
              value={data.price}
              type="number"
              name="price"
              placeholder="$20"
              className="max-w-[120px] p-[10px] border-slate-700 border-2"
            />
          </div>
        </div>

        <button
          type="submit"
          className="max-w-[120px] border-none py-[10px] bg-red-800 text-white cursor-pointer px-6 rounded-lg font-bold"
        >
          ADD
        </button>
      </form>
    </div>
  );
};

export default Add;
