import React from 'react';
import img from "../../../assets/svg/image.svg";
import "./image.component.css";

;



const ImageComponent = () => {
    return (
      <div className="container-img">
        <img src={img} alt="img" />
        <div>Drag & Drop your image here</div>
      </div>
    );
}

export default ImageComponent;
