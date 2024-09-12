import React from "react";
import bg_image from "../../assets/bg_image.jpeg";

const Header = () => {
  return (
    <div className="head relative h-[34vw] mx-auto w-10/12 my-8 bg-cover rounded-2xl  text-center flex">
      <div className="flex flex-col justify-center items-center align-middle gap-14  bg-red-600 w-2/3 items-center">
        <h2 className="text-slate-900 font-medium text-[max(4.5vw,22px)]">
          Get your favorite food order here
        </h2>
        <p className="text-slate-800 text-[1.3vw]">
          Choose from a varied menu featuring exquisite dishes crafted with premium ingredients and expert skill. Our aim is to fulfill your cravings and elevate your dining experience with each delectable meal.
        </p>
      </div>
      <div>
        <img src={bg_image} alt='not working' className=" h-[34vw] w-auto" />
      </div>
    </div>
  );
};

export default Header;
