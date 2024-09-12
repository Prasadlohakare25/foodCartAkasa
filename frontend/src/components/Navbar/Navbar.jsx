import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { StoreContext } from "../../context/StoreContext";
import { assets } from "../../assets/assets";

const Navbar = ({ setShowLogin }) => {
  const [menu, setMenu] = useState("home");
  const { getTotalCartAmount, token, setToken } = useContext(StoreContext);
  const navigate = useNavigate();

  // Logout function
  const logout = () => {
    localStorage.removeItem("token");
    setToken("");
    navigate("/");
  };

  return (
    <div className="flex justify-between items-center py-5 bg-slate-200 px-16">
      <Link to="/" className="text-red-600 text-3xl font-bold tracking-tight">
        Food<a className="text-black">Cart</a>
      </Link>

      <ul className="flex gap-5 text-blue-800 text-xl list-none font-semibold">
        <Link
          to="/"
          onClick={() => setMenu("home")}
          className={`hover:border-b-2 ${menu === "home" ? "border-blue-800" : ""}`}
        >
          Home
        </Link>
        <Link
          to="/"
          onClick={() => setMenu("menu")}
          className={`hover:border-b-2 text-xl text-red-800 font-semibold ${menu === "menu" ? "border-blue-800" : ""}`}
        >
          Menu
        </Link>
        {/* <a
          href="#footer"
          onClick={() => setMenu("contact us")}
          className={`hover:border-b-2 ${menu === "contact us" ? "border-blue-800" : ""}`}
        >
          Contact Us
        </a> */}
      </ul>

      <div className="flex items-center gap-10">
        <div className="relative">
          <Link to="/cart">
            <img src={assets.basket_icon} alt="Basket Icon" className="w-6" />
          </Link>
          {getTotalCartAmount() !== 0 && (
            <div className="absolute top-[-5px] right-[-5px] w-2.5 h-2.5 bg-tomato rounded-full"></div>
          )}
        </div>

        {/* If user logged-in then showing profile and logout options */}
        {!token ? (
          <button
            onClick={() => setShowLogin(true)}
            className="bg-transparent text-blue-800 border border-tomato py-2 px-6 rounded-full cursor-pointer transition hover:bg-red-50 text-sm"
          >
            Login
          </button>
        ) : (
          <div className="relative cursor-pointer group">
            <img src={assets.profile_icon} alt="Profile Icon" className="w-6" />
            <ul className="absolute right-0 z-10 hidden group-hover:flex flex-col gap-2 bg-red-50 py-2 px-6 rounded border border-red-400 outline outline-2 outline-white list-none">
              <li
                onClick={() => navigate("/myorders")}
                className="flex items-center gap-1 cursor-pointer hover:text-red-400"
              >
                <img src={assets.bag_icon} alt="Orders Icon" className="w-4" />
                <p className="">Orders</p>
              </li>
              <hr className="border-red-400" />
              <li
                onClick={logout}
                className="flex items-center gap-1 cursor-pointer hover:text-red-400"
              >
                <img src={assets.remove_icon_red} alt="Logout Icon" className="w-5" />
                <p>Logout</p>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
