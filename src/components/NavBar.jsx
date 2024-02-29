import React, { useState } from "react";
import logo from "../assets/logo.svg";
import hamburger from "../assets/hamburgerMenu.svg";
import close from "../assets/close.svg";
import lock from "../assets/lock.svg";

const NavBar = () => {
  const [toggle, setToggle] = useState(true);
  const handleOnClick = () => {
    setToggle(!toggle);
  };
  return (
    <div className="w-full h-[75px] bg-white border-b">
      <div className="md:max-w-[1480px] max-w-[400px] m-auto w-full h-full flex justify-between items-center">
        <img src={logo} className="h-[75px] object-contain" alt="Logo" />

        <div className="hidden md:flex items-center">
          <ul className="flex gap-4">
            <li className="cursor-pointer">Home</li>
            <li className="cursor-pointer">About</li>
            <li className="cursor-pointer">Support</li>
            <li className="cursor-pointer">Platform</li>
            <li className="cursor-pointer">Pricing</li>
          </ul>
        </div>

        <div className="hidden md:flex gap-4">
          <button className="flex justify-between items-center bg-transparent px-6">
            <img src={lock} />
            <span>Login</span>
          </button>
          <button className="px-8 py-3 rounded-md bg-[#20B486] font-bold">
            Sign up for free
          </button>
        </div>

        <div className="md:hidden" onClick={handleOnClick}>
          <img src={toggle ? hamburger : close} />
        </div>
      </div>

      <div className={toggle ? "hidden" : "absolute z-10 p-4 bg-white w-full px-8 md:hidden"}>
        <ul>
          <li className="p-4 hover:bg-gray-100 cursor-pointer">Home</li>
          <li className="p-4 hover:bg-gray-100 cursor-pointer">About</li>
          <li className="p-4 hover:bg-gray-100 cursor-pointer">Support</li>
          <li className="p-4 hover:bg-gray-100 cursor-pointer">Platform</li>
          <li className="p-4 hover:bg-gray-100 cursor-pointer">Pricing</li>
        </ul>
        <div className="flex flex-col my-4 gap-4">
          <button className="flex justify-center items-center bg-transparent px-6 py-4 gap-2">
            <img src={lock} />
            <span>Login</span>
          </button>
          <button className="px-8 py-3 rounded-md bg-[#20B486] font-bold">
            Sign up for free
          </button>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
