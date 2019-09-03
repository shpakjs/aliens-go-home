import React from 'react';
import Heart from './Heart';
import CurrentScore from './CurrentScore';


const UserInfo = (props) => {
    return(<>
        <Heart position={props.position}/>
        <CurrentScore score={props.score}/>
    </>)
}

export default UserInfo;