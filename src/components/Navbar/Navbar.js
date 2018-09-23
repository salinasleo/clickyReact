import React from "react";
import "./Navbar.css";

const Navbar = () => (

  <nav className="nav nav-fill ">

    <a className="nav-item" id="navtitle" href="/">Clicky Game</a>


  <a className="nav-item" id="guessResult"> Click an Image to Begin!</a>


    <a className="nav-item" id="Score">Score: 0 | Top Score: 0</a>

</nav>
)
;

export default Navbar;
