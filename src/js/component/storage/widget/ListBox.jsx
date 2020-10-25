'use strict';

import React from 'react';
import { array, bool, object } from 'prop-types';
import { animated } from 'react-spring';

import getPropWithDefval from '../../../utils/get-prop-with-defval';


const getId = item => {
    const defval = Math.floor(Math.random() * 1000);

    return getPropWithDefval('id', defval)(item);
};
const getIcon = getPropWithDefval('icon', 'fa fa-question');
const getTitle = getPropWithDefval('title', 'Unknown');
const getDescription = getPropWithDefval('description', 'Unknown');


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