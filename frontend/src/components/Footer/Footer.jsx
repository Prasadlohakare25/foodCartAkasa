import React from "react";
import { assets } from "../../assets/assets";

const Footer = () => {
  return (
    <div className="bg-slate-200 text-black flex flex-col items-center gap-5 p-8 pt-20 mt-24">
      <div className="w-full grid grid-cols-2 sm:grid-cols-1 md:grid-cols-3 gap-20 justify-between">
        <div className="flex flex-col items-start gap-5">
          <h1 className="text-red-600 font-bold text-3xl">FoodCart</h1>
          <p>
            The place to find the food to enjoy with your loved ones.
          </p>
        </div>

        <div className="flex flex-col items-start gap-5">
          <h2 className="text-black text-xl">Contact Us</h2>
          <ul className="list-none space-y-2">
            <li>+91-7972654279</li>
            <li>prasadlohakare2003@gmail.com</li>
          </ul>
        </div>

        {/* Removed .footer-content-center section as it's not used in your JSX */}
      </div>

      <hr className="w-full h-px my-5 bg-gray-600 border-none" />
      
      <p className="text-center">Copyright 2024 ©FoodCart - All Rights Reserved.</p>
    </div>
  );
};

export default Footer;
