import React from "react";

const Header = () => {
  return (
    <div className="flex items-center justify-between px-6 md:px-16 lg:px-24 xl:px-32 py-4 border-b border-gray-300">
      <img className="cursor-pointer w-38 h-[34.54px]" src="/logo.svg" alt="" />
      <div className="hidden md:flex items-center gap-8">
        <button className="border border-gray-300 px-3 py-1 rounded-full text-xs cursor-pointer opacity-80 leading-1.7">
          Seller Dashboard
        </button>
        <ul className="*:cursor-pointer flex gap-8 *:leading-1.5">
          <li className="active">Home</li>
          <li>All Product</li>
        </ul>
        <div className="flex items-center text-sm gap-2 border border-gray-300 px-3 rounded-full max-lg:hidden">
          <input
            type="text"
            className="py-1.5 w-full bg-transparent outline-none placeholder-gray-500 leading-1.5"
            placeholder="Search products"
          />
          <img className="w-4 h-4" src="/search-icon.svg" alt="" />
        </div>
        <div className="relative cursor-pointer">
          <img className="w-6 opacity-80" src="/shopping-cart.svg" alt="" />
          <button className="absolute -top-2 -right-3 text-xs text-white bg-[#4fbf8b] w-4.5 h-4.5 rounded-full">
            0
          </button>
        </div>
        <div className="cursor-pointer px-8 py-2 bg-[#4fbf8b] hover:bg-[#44AE7C] transition text-white rounded-full">
          Login
        </div>
      </div>
    </div>
  );
};

export default Header;
