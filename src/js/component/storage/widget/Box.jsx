'use strict';

import React from 'react';
import PropTypes from 'prop-types';

import Circle from './Circle.jsx';

export default function Box({ box }) {

    return (
        <div className="box">
            <div className="content">
                <Circle />
                <div className="description">
                   { box.description }
                </div>
            </div>
        </div>
    );
}

Box.propTypes = {
    box: PropTypes.object
};