import React from 'react';
import PropTypes from 'prop-types';
import FlyingObject from './FlyingObject/FlyingObject';
import Decorations from './Decorations/Decorations';
import Cannon from './Cannon/Cannon';
import UserInfo from './UserInfo/UserInfo';
import StartGame from './StartGame';
import {gameHeight} from '../utils/constants';
import { signIn } from 'auth0-web';
import Leaderboard from './LeaderBoard';

const Canvas = (props) => {
    const viewBox = [window.innerWidth / -2, 100 - gameHeight, window.innerWidth, gameHeight];
    return (
        <svg
        id="aliens-go-home-canvas"
        preserveAspectRatio="xMaxYMax none"
        onMouseMove={props.trackMouse}
        viewBox={viewBox}
        >
            <defs>
                <filter id="shadow">
                    <feDropShadow dx="1" dy="1" stdDeviation="2" />
                </filter>
            </defs>
            <Decorations started={props.gameState.started}/>
            <Cannon 
                position={{x: 0, y: -100}} 
                angle={props.angle}/>
            {props.gameState.flyingObjects.map(flyingObject => (
                <FlyingObject
                key={flyingObject.id}
                position={flyingObject.position}
                />
            ))} 
            
            { !props.gameState.started &&
                <g>
                    <UserInfo score={props.gameState.kills} position={{x: -500, y: 20}}/>
                    <StartGame onClick={props.startGame} />
                    <Leaderboard currentPlayer={props.currentPlayer} authenticate={signIn} leaderboard={props.players} /> />
                </g> 
            }
        </svg>
    );
};

Canvas.propTypes = {
    angle: PropTypes.number.isRequired,
    gameState: PropTypes.shape({
        started: PropTypes.bool.isRequired,
        kills: PropTypes.number.isRequired,
        lives: PropTypes.number.isRequired,
    }).isRequired,
    trackMouse: PropTypes.func.isRequired,
    startGame: PropTypes.func.isRequired,
    currentPlayer: PropTypes.shape({
        id: PropTypes.string.isRequired,
        maxScore: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        picture: PropTypes.string.isRequired,
    }),
    players: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        maxScore: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        picture: PropTypes.string.isRequired,
    })),
    //shoot: PropTypes.func.isRequired,
};
Canvas.defaultProps = {
    currentPlayer: null,
    players: null,
  };
export default Canvas;