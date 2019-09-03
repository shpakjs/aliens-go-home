import React from 'react';
import Sky from './Sky';
import Ground from './Ground';
import Title from './Title';


const Decorations = (props) => {
    return(<>
        <Sky />
        <Ground />
        {props.started || <Title />}
    </>)
}

export default Decorations;