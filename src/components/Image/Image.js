import React from "react";
import "./Image.css";

const Image = ({ src, index, handleClick }) => (

  <div>
        <img data-id={index} src={src} alt="image" className="img-thumbnail" onClick={handleClick} />
    </div>


);

export default Image;

