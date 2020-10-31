'use strict';

import React from 'react';
import { array, bool, object } from 'prop-types';
import { animated } from 'react-spring';

import { getId, getIcon, getTitle, getDescription } from '../../../utils/get-data-with-defval';

export default function ListBox({ listBox, prop, isActive }) {

    return (
        <div className="list-box">
            {
                isActive && listBox.map(box => {
                    return (
                        <animated.div
                            key={getId(box)}
                            className="box"
                            style={{ zoom: prop.zoom, opacity: prop.opacity, backgroundColor: prop.backgroundColor }}
                        >
                            <div className="main">
                                <i className={getIcon(box)}></i>
                                <p>{getTitle(box)}</p>
                            </div>
                            <div className="sub">
                                {getDescription(box)}
                            </div>
                        </animated.div>
                    );
                })
            }
        </div>
    );
}

ListBox.propTypes = {
    listBox: array.isRequired,
    isActive: bool,
    prop: object
};