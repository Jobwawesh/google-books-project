import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav  class="navbar navbar-expand-lg bg-dark ">
      <div class="container-fluid">
        <Link className="navbar" to="/home">
          Home
        </Link>
        <Link className="navbar" to="/bookshelf" >
          Bookshelf
        </Link>
        <Link className="navbar" to="/logout">
          LogOut
        </Link>
      </div>
    </nav>
  )
}

export default Navbar