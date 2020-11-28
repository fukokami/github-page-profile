'use strict';

import { all, always, compose, concat, converge, identity, ifElse, isNil, join, prop, unapply } from 'ramda';

import React from 'react';
import { bool, object } from 'prop-types';


import { getType, getIcon, getFrameHeader, getValue } from '../../../../utils/get-data-with-defval';


const appendClass = (condition, defaultClass = [], appendClass = []) => {

    return compose(
        join(' '),
        ifElse(
            identity,
            always(defaultClass),
            always(concat(defaultClass, appendClass))
        )
    )(condition);
};

const checkEmpty = converge(
    compose(
        all(isNil),
        unapply(identity)
    ),
    [
        prop('class-size'),
        prop('icon'),
        prop('frame-header'),
        prop('value'),
    ]
);

export default function Frame({ isReserve, frame }) {

    const header = getFrameHeader(frame);
    const icon = getIcon(frame);
    const value = getValue(frame);
    const type = getType(frame);

    return (
        checkEmpty(frame) ? null : (
            <div className={appendClass(isReserve, ['frame', type], ['reserve'])}>
                <div className="right">
                    <i className={icon}></i>
                </div>
                <div className="left">
                    <h4>{header}</h4>
                    <hr />
                    <p>{value}</p>
                </div>
            </div>
        )
    );
}

Frame.propTypes = {
    isReserve: bool,
    frame: object
};