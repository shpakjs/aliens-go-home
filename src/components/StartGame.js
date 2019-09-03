import React from 'react';
import PropTypes from 'prop-types';
import { gameWidth } from '../utils/constants';

const StartGame = (props) => {
  const button = {
    x: gameWidth / -2, // половина ширины
    y: -280, // минус значит "над" (выше нуля)
    width: gameWidth,
    height: 200,
    rx: 10, // border радиус
    ry: 10, // border радиус
    style: {
      fill: 'transparent',
      cursor: 'pointer',
    },
    onClick: props.onClick,
  };

  const text = {
    textAnchor: 'middle', // центр
    x: 0, // центр относительно оси X
    y: -130, // 150 выше нуля (по оси Y)
    style: {
      fontSize: 50,
      fill: '#fafafa',
      cursor: 'pointer',
    },
    onClick: props.onClick,
  };
  return (
    <g filter="url(#shadow)">
      <rect {...button} />
      <text {...text}>
        Tap To Start!
      </text>
    </g>
  );
};

StartGame.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default StartGame;