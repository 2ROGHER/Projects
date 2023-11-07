import React, { useState } from "react";
import PropTypes from "prop-types";
import "../../styles/uploader.main.css";
import info from "../../assets/svg/info.svg";
import ImageComponent from "./fragments/ImageComponent";
function handleChangeInput() {}
const UploaderMain = ({ handleChooseFile }) => {
  const [img, setImg] = useState("");
  console.log(img);
  return (
    <div className="container">
      <div className="box">
        <h1 className="row-1">Upload your image</h1>
        <div className="row-2">
          <img src={info} alt="material-symbols-outlined" />
          <span className="text-alert">File should be .jpeg, .png,...</span>
        </div>
        <div className="row-3">
          <ImageComponent />
        </div>
        <div className="row-4">Or</div>

        <div className="row-5">
          <button className="btn row-6" onClick={handleChooseFile} type="file">
            Choose a file
          </button>
          <input
            onChange={(e) => {
              setImg(e.target.value);
            }}
            type="file"
            name="file-input"
            id="file-input"
            value={img}
          />
        </div>
      </div>
    </div>
  );
};

UploaderMain.propTypes = {
  handleChooseFile: PropTypes.func.isRequired,
};

export default UploaderMain;
