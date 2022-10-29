import React from "react";
import Logo from "../assets/logo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  // const [nav, setNav] = useState(false);
  // const handleClick = () => setNav(!nav)

  return (
    <div className="w-full h-20 flex justify-between items-center px-4 bg-gray-900 text-gray-300 mt-3">
      <div className="z-10">
        <img src={Logo} alt="Logo img" style={{ width: "50px" }} />
      </div>
      <div className="md:flex">
        <ul className="flex flex-col md:flex-row">
          <li className="px-4  hover:text-gray-500">
            <Link to="/">Home</Link>
          </li>
          <li className="px-4  hover:text-gray-500">
            <Link to="/repos">Repos</Link>
          </li>
          <li className="px-4  hover:text-gray-500">
            <Link to="*">404 test</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
