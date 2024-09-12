import React, { useContext } from "react";
import { assets } from "../../assets/assets";
import { StoreContext } from "../../context/StoreContext";

const FoodItem = ({ id, name, price, description, image }) => {
  const { cartItems, addToCart, removeFromCart, url } =
    useContext(StoreContext);

  return (
    <div className="food-item w-full mx-auto rounded-[15px] shadow-[0px_0px_5px_rgba(0,0,0,0.1)] transition-all duration-300 animate-fadeIn">
      <div className="food-item-img-container relative">
        <img
          className="food-item-image w-full h-40 rounded-t-[15px]"
          // fetching images from backend db
          src={url + "/images/" + image}
          alt=""
        />
        {!cartItems[id] ? (
          <img
            className="add w-[35px] absolute bottom-[15px] right-[15px] cursor-pointer rounded-full"
            onClick={() => addToCart(id)}
            src={assets.add_icon_white}
            alt=""
          />
        ) : (
          <div className="food-item-counter absolute bottom-[15px] right-[15px] flex items-center gap-[10px] p-[6px] rounded-full bg-white">
            <img
              onClick={() => removeFromCart(id)}
              className="w-[30px]"
              src={assets.remove_icon_red}
              alt=""
            />
            <p>{cartItems[id]}</p>
            <img
              onClick={() => addToCart(id)}
              className="w-[30px]"
              src={assets.add_icon_green}
              alt=""
            />
          </div>
        )}
      </div>

      <div className="food-item-info p-[20px_10px]">
        <div className="food-item-name-rating flex justify-between items-center mb-[10px]">
          <p className=" text-[20px] font-medium">{name}</p>
        </div>

        <p className="food-item-desc text-[#676767] text-[15px]">{description}</p>
        <p className="food-item-price text-tomato text-[22px] font-medium my-[10px]">${price}</p>
      </div>
    </div>
  );
};

export default FoodItem;
