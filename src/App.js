import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import { Repos, Home, Navbar } from "./components/Aggregate";

const url = ` https://api.github.com/users/baddamin-code/repos`;

const App = () => {

  const [repos, setRepos] = useState([]);
  
  useEffect(() => {
    const fetchRepos = async () => {
      const res = await fetch(url);
      const repos = await res.json();
      setRepos(repos);
    };
    fetchRepos();
  }, []);

  // console.log(repos);

  
  return (
    <>
    <div className="App">
      <div><Navbar /></div>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/repos" element={<Repos />}></Route>
      </Routes>
      <Repos repos={repos}/>
    </div>
    </>
  );
}

export default App;
