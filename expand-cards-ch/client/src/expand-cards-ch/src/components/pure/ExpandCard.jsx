import React from "react";
import PropTypes from "prop-types";
import '../../styles/cards.expand.scss';
const ExpandCard = ({ data }) => {

  return <div className="c-container">{data()}</div>;
};

ExpandCard.propTypes = {
  data: PropTypes.func.isRequired,
};

export default ExpandCard;
