import React from "react";
import "./SkeletonLoader.css"; // Import your custom CSS for the shimmer effect

const SkeletonLoader = () => {
  return (
    <div className="bg-gray-200 rounded-md m-2 relative overflow-hidden">
      <div className="relative z-10 bg-gray-300 rounded-md w-full h-[150px]"></div>
      <div className="p-2">
        <div className="bg-gray-300 rounded-md h-[20px] w-[60%] mb-2"></div>
        <div className="bg-gray-300 rounded-md h-[15px] w-[80%] mb-2"></div>
        <div className="bg-gray-300 rounded-md h-[20px] w-[40%]"></div>
      </div>
    </div>
  );
};

export default SkeletonLoader;
