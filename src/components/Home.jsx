import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="z-10 my-60 text-center text-gray-500">
      <h1 className="text-xl text-gray-500 tracking-wide">
        Hi, My name is{" "}
        <span className="text-2xl text-green-900">
          Al-ameen Omogbolahan Raji
        </span>{" "}
        <br />
        Student ID: <span className="text-green-900">ALT/SOE/022/2659</span>
      </h1>
      <h1>
        For my AltSchool Frontend Second Semester Examination Project,
        <br />
        I'm implementing an API fetch of my GitHub portfolio. <br />
        I'll also be wrapping the UI in an Error boundary Component and create a
        404 test page. <br />
        All the pages will be rendered using the React Browser Router DOM <br />
        as the instruction states.
      </h1>{" "}
      <br />
      <h1>
        Click{" "}
        <Link to="/repos" className="text-white hover:text-gray-300">
          here
        </Link>{" "}
        to check out full list of repository
      </h1>
    </div>
  );
};

export default Home;
