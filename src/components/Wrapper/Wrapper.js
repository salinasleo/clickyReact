import React from "react";
import "./Wrapper.css";

const Wrapper = props => (
  <div className="container">
    {/* <div className="row"> */}
      {/* <div className="column"> */}
      {props.children}
    {/* </div> */}
  {/* </div> */}
  </div>

);

export default Wrapper;

