'use strict';

import React from 'react';
import { bool, func } from 'prop-types';
import { useSpring, animated } from 'react-spring';

Menu.propTypes = {
    isOpen: bool,
    setOpen: func
};

export default function Menu({ isOpen, setOpen }) {

    const props = useSpring({
        transform: isOpen ? 'rotate(-90deg)' : 'rotate(0deg)',
        color: isOpen ? 'white' : 'black',
    });

    const handleOnclick = () => {
        setOpen(!isOpen);
    };

    return (
        <animated.div className="menu" style={props} onClick={handleOnclick}>
            {
                isOpen ? <i className="fas fa-times"></i> : <i className="fas fa-bars"></i>
            }
        </animated.div>
    );
}