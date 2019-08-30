import React from 'react';
import Sky from './Sky';
import Ground from './Ground';
import CannonBase from './CannonBase';
import CannonPipe from './CannonPipe';

const Canvas = (props) => {
    const viewBox = [window.innerWidth / -2, 100 - window.innerHeight, window.innerWidth, window.innerHeight];
    return (
        <svg
        id="aliens-go-home-canvas"
        preserveAspectRatio="xMaxYMax none"
        onMouseMove={props.trackMouse}
        viewBox={viewBox}
        >
        <Sky />
        <Ground />
        <CannonPipe rotation={props.angle} />
        <CannonBase />
        </svg>
    );
};

export default Canvas;