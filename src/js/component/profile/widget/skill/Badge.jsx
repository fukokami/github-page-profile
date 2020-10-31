'use strict';

import { always, compose, concat, cond, identity, ifElse, join, prop, propEq, T } from 'ramda';

import React from 'react';
import { array } from 'prop-types';

import { getId, getColor } from '../../../../utils/get-data-with-defval';

const renderIcon = badge => {
    const icon = prop('icon', badge);

    return icon
        ? (
            <span>
                <i className={icon}></i>
            </span>
        )
        : null;
};
const renderImage = () => { };

const renderContent = cond([
    [propEq('type', 'icon'), renderIcon],
    [propEq('type', 'image'), renderImage],
    [T, always(null)],
]);

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

export default function Badge({ badgeList }) {

    return (
        <div className="badge-area">
            {
                badgeList.map(item => {
                    return (
                        <div key={getId(item)} className={appendClass(!1, ['badge'], [getColor(item)])}>
                            { renderContent(item)}
                        </div>
                    );
                })
            }
        </div>
    );
}

Badge.propTypes = {
    badgeList: array
};