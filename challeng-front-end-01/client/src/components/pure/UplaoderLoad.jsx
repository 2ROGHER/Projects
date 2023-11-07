import React from 'react';
import PropTypes from 'prop-types';


const UplaoderLoad = () => {
    return (
      <div className="container-l">
        <span className="row-l-1"> Uploading... </span>
        <div className="row-l-2">
          <div className="spin"></div>
        </div>
      </div>
    );
};


UplaoderLoad.propTypes = {

};


export default UplaoderLoad;
