import React from "react";
import { assets } from "../../assets/assets";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center py-2 px-6 bg-red-100">
      <div>
        <a href="/" className="flex flex-col">
          <h2 className="text-[26px] font-bold tracking-tight text-slate-900">
            <a className="text-3xl text-red-800">Food</a><a className="text-3xl">Cart</a>
          </h2>
          <span className="font-semibold">Admin Panel</span>
        </a>
      </div>
      <img
        className="w-[40px] rounded-full"
        src={assets.prasad_photo}
        alt="Profile"
      />
    </div>
  );
};

export default Navbar;
