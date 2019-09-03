import React from 'react';
import CannonPipe from './CannonPipe';
import CannonBase from './CannonBase';
import CannonBall from './CannonBall';


const Cannon = (props) => {
    return(<g>
        <CannonPipe rotation={props.angle} />
        <CannonBase />
        <CannonBall position={props.position}/>
    </g>)
}

export default Cannon;