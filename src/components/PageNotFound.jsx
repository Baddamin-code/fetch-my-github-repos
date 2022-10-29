import React from "react";
import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <div className="text-center mt-20 text-3xl text-gray-300">
      <h1>Sorry</h1>
      <p>Page Cannot be found</p>
      <Link to="/" className="text-black hover:text-gray-500 text-xl">
        Go Back to homepage
      </Link>
    </div>
  );
};

export default PageNotFound;
