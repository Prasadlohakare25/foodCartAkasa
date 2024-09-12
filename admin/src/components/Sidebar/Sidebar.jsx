import React from "react";
import { NavLink } from "react-router-dom";
import { assets } from "../../assets/assets";

const Sidebar = () => {
  return (
    <div className="w-[18%] min-h-screen border border-gray-400 border-t-0 text-[max(1vw,_10px)] bg-blue-100">
      <div className="pt-[50px] pl-[20%] flex flex-col gap-[20px]">
        <NavLink
          to={"/add"}
          className={({ isActive }) =>
            `flex items-center gap-[12px] border border-gray-400 border-r-0 p-[8px_10px] rounded-l-md cursor-pointer ${
              isActive ? 'bg-[#fff0ed] border-t-0 border-r-0 border-b-0 border-l-[1.5px] border-blue-600' : ''
            }`
          }
        >
          <img src={assets.add_icon} alt="" />
          <p className="hidden md:block">Add Items</p>
        </NavLink>

        <NavLink
          to={"/list"}
          className={({ isActive }) =>
            `flex items-center gap-[12px] border border-gray-400 border-r-0 p-[8px_10px] rounded-l-md cursor-pointer ${
              isActive ? 'bg-[#fff0ed] border-t-0 border-r-0 border-b-0 border-l-[1.5px] border-blue-600' : ''
            }`
          }
        >
          <img src={assets.order_icon} alt="" />
          <p className="hidden md:block">List Items</p>
        </NavLink>

        <NavLink
          to={"/orders"}
          className={({ isActive }) =>
            `flex items-center gap-[12px] border border-gray-400 border-r-0 p-[8px_10px] rounded-l-md cursor-pointer ${
              isActive ? 'bg-[#fff0ed] border-t-0 border-r-0 border-b-0 border-l-[1.5px] border-blue-600' : ''
            }`
          }
        >
          <img src={assets.all_order_items} alt="" />
          <p className="hidden md:block">Orders</p>
        </NavLink>
      </div>
    </div>
  );
};

export default Sidebar;
