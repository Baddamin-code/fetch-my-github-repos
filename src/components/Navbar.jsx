import React, { useState } from "react";
import Logo from "../assets/logo.png";
import { FaBars } from "react-icons/fa";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav)




  return (
    <div className="w-full h-20 flex justify-between items-center px-4 bg-gray-900 text-gray-300 [#181629]">
      <div className="z-10">
        <img src={Logo} alt="Logo img" style={{ width: "50px" }} />
      </div>
      <div className="md:flex">
        <ul className="flex flex-col md:flex-row">
          <li className="cursor-pointer px-4"><a href="">Home</a></li>
          <li className="cursor-pointer px-4"><a href="">Error Boundary</a></li>
          <li className="cursor-pointer px-4"><a href="">404 test</a></li>
        </ul>
      </div>


    </div>
  );
};

export default Navbar;
