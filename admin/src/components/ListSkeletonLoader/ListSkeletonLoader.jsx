import React from "react";

const ListSkeletonLoader = () => {
  return (
    <div className="p-2 space-y-1">
      {[...Array(10)].map((_, index) => (
        <div
          key={index}
          className="relative bg-gray-200 rounded-md overflow-hidden space-y-2 p-2"
        >
          {/* Shimmer effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 animate-shimmer"></div>
          {/* Image placeholder */}
          <div className="relative z-10 bg-gray-300 rounded-md w-12 h-12"></div>
          {/* Text placeholders */}
          <div className="relative z-10 bg-gray-300 rounded-md h-5 w-24"></div>
          <div className="relative z-10 bg-gray-300 rounded-md h-4 w-24"></div>
          <div className="relative z-10 bg-gray-300 rounded-md h-5 w-12"></div>
          <div className="relative z-10 bg-gray-300 rounded-md h-5 w-5"></div>
        </div>
      ))}
    </div>
  );
};

export default ListSkeletonLoader;
