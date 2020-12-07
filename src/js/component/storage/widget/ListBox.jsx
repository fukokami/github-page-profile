'use strict';

import React from 'react';
import { array, bool, object } from 'prop-types';
import { animated } from 'react-spring';

import Description from './Description.jsx';

import { getId, getIcon, getTitle, getDescriptionComponent } from '../../../utils/defval/get-data-with-defval';

ListBox.propTypes = {
    listBox: array.isRequired,
    baseDescComponent: object,
    isActive: bool,
    prop: object
};

export default function ListBox({ listBox, baseDescComponent, prop, isActive }) {

    return (
        <div className="category__list">
            {
                listBox.map(box => {
                    return (
                        <animated.div
                            key={getId(box)}
                            className="box"
                            style={isActive ? { zoom: prop.zoom, opacity: prop.opacity } : { display: 'none' }}
                        >
                            <div className="box__icon d-flex-center flex-col">
                                <i className={getIcon(box)}></i>
                                <p className="mx-5 text-upper text-center font-medium">{getTitle(box)}</p>
                            </div>
                            <Description descComponent={getDescriptionComponent(box)} baseDescComponent={baseDescComponent} />
                        </animated.div>
                    );
                })
            }
        </div>
    );
}
