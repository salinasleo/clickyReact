import React from "react";
import "./Navbar.css";

const Navbar =  props => (

  <nav className="nav nav-fill ">

    <a className="nav-item" id="navtitle" href="/">Clicky Game</a>


  {props.children}

</nav>
)
;

export default Navbar;

