import React from "react";
import { Route, Routes } from "react-router-dom";
import { Home } from "./components/Aggregate";

function App() {
  return <div className="App">
    Hello World
    <Routes>
      <Route path="/" element={<Home />}>

      </Route>
    </Routes>
  </div>;
}

export default App;
