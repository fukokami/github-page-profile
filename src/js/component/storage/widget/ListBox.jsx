'use strict';

import React from 'react';
import { array, bool, object } from 'prop-types';
import { animated } from 'react-spring';

import Description from './Description.jsx';

import { getId, getIcon, getTitle, getDescriptionComponent } from '../../../utils/get-data-with-defval';

export default function ListBox({ listBox, baseDescComponent, prop, isActive }) {

    return (
        <div className="list-box">
            {
                listBox.map(box => {
                    return (
                        <animated.div
                            key={getId(box)}
                            className="box"
                            style={isActive ? { zoom: prop.zoom, opacity: prop.opacity, backgroundColor: prop.backgroundColor } : { display: 'none' }}
                        >
                            <div className="main">
                                <i className={getIcon(box)}></i>
                                <p>{getTitle(box)}</p>
                            </div>
                            <Description descComponent={getDescriptionComponent(box)} baseDescComponent={baseDescComponent} />
                        </animated.div>
                    );
                })
            }
        </div>
    );
}

ListBox.propTypes = {
    listBox: array.isRequired,
    baseDescComponent: object,
    isActive: bool,
    prop: object
};