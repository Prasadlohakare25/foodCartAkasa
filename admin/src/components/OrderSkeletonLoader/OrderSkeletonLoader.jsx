import React from "react";

const OrderSkeletonLoader = () => {
  return (
    <div>
      {[...Array(5)].map((_, index) => (
        <div
          className="bg-gray-200 rounded-md my-2 relative overflow-hidden"
          key={index}
        >
          <div className="relative z-10 bg-gray-300 rounded-md h-36 w-full"></div>
          <div className="relative z-10 p-2">
            <div className="bg-gray-300 rounded-md h-5 w-3/5 mb-2"></div>
            <div className="bg-gray-300 rounded-md h-4 w-4/5 mb-2"></div>
            <div className="bg-gray-300 rounded-md h-5 w-2/5"></div>
          </div>
          {/* Keyframes for the shimmer effect */}
          <div
            className="absolute inset-0 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 animate-shimmer"
            aria-hidden="true"
          ></div>
        </div>
      ))}
    </div>
  );
};

export default OrderSkeletonLoader;
