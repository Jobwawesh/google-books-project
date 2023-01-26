import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./component/Home";
import Login from "./component/Login";
import Navbar from "./component/NavBar";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (

    <div className="App">
      <Navbar setIsLoggedIn={setIsLoggedIn} />
      <Routes>
        <Route exact path="/logout" element={<logout />} />
        <Route exact path="/bookshelf" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
        <Route exact path="/" element={<Home isLoggedIn={isLoggedIn} />} />
      </Routes>
    </div>
  );
}


export default App;