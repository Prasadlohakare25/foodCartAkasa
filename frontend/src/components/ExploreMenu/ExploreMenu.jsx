import React from "react";
import { menu_list } from "../../assets/assets";

const ExploreMenu = ({ category, setCategory }) => {
  return (
    <div className="p-8 bg-white" id="explore-menu">
      <h1 className="text-3xl font-bold mb-4">Discover our menu</h1>
      <p className="text-lg mb-6">
        Discover our diverse menu, designed to delight your palate and elevate your dining experience. Each dish is crafted to satisfy your cravings and provide a memorable meal. Enjoy a journey through flavors that promise to delight and impress.
      </p>

      {/* Rendering the menu list using the map method */}
      <div className="flex flex-wrap gap-4">
        {menu_list.map((item, index) => {
          return (
            <div
              onClick={() =>
                setCategory((prev) =>
                  prev === item.menu_name ? "All" : item.menu_name
                )
              }
              key={index}
              className="cursor-pointer flex flex-col items-center transition-transform duration-300 transform hover:scale-105"
            >
              <img
                className={`w-32 h-32 rounded-full object-cover ${category === item.menu_name ? "border-2 border-blue-500" : ""}`}
                src={item.menu_image}
                alt=""
              />
              <p className="mt-2 text-center text-lg font-medium">{item.menu_name}</p>
            </div>
          );
        })}
      </div>
      <hr className="my-6 border-gray-300" />
    </div>
  );
};

export default ExploreMenu;
