import React from "react";
import PropTypes from "prop-types";
import "../../styles/uploader.success.css";
import done from "../../assets/svg/checked-success-svgrepo-com.svg";
const UploaderSuccess = () => {
  return (
    <div className="container-s">
      <div className="row-1-s">
        <img src={done} alt="icon-success" style={{ width: "40px" }} />
        <h2>Uploaded Successfully!</h2>
      </div>
      <div className="row-2-s">
        <div className="img-box"></div>
      </div>
      <div className="row-3-s">
        <input type="text" name="link" value={undefined} />
        <button>Copy Link</button>
      </div>
    </div>
  );
};

UploaderSuccess.propTypes = {};

export default UploaderSuccess;
