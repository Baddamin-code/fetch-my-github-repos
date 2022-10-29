import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import { Repos, Home, Navbar, ErrorBoundary } from "./components/Aggregate";

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
      <ErrorBoundary>
      <div><Navbar /></div>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/repos" element={<Repos  repos={repos}/>}></Route>
        {/* <Route path="/repos" element={<Repos  repos={repos}/>}></Route>
        <Route path="/repos" element={<Repos  repos={repos}/>}></Route> */}
      </Routes>
      </ErrorBoundary>
      {/* <Repos repos={repos}/> */}
    </div>
    </>
  );
}

export default App;
