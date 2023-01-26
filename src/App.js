import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login/Login";
import Navbar from "./components/Navbar";

function App() {
  // const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div>
      <Navbar  />
      <Routes>
        <Route exact path="/logout" element={<logout />} />
        <Route exact path="/bookshelf" element={<Login />} />
        <Route exact path="/" element={<Home  />} />
      </Routes>
    </div>
  );
}


export default App;
