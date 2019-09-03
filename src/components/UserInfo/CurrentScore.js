import React from 'react';
import PropTypes from 'prop-types';

const CurrentScore = (props) => {
  const scoreStyle = {
    fontSize: 60,
    fill: '#f5f5f5',
  };
  return (
    <g filter="url(#shadow)">
      <text style={scoreStyle} x="500" y="60">
        {props.score}
      </text>
    </g>
  );
};

CurrentScore.propTypes = {
  score: PropTypes.number.isRequired,
};

export default CurrentScore;