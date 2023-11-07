import React from "react";
import PropTypes from "prop-types";
import "../../styles/footer.css";
const Footer = ({ username }) => {
  return (
    <div className="footer">
      Created by <strong>{username}</strong> - devChallenges.io
    </div>
  );
};

Footer.propTypes = {
  username: PropTypes.string.isRequired,
};

export default Footer;
