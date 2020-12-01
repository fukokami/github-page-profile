'use strict';

import { always, cond, prop, propEq, T } from 'ramda';

import React from 'react';
import { array } from 'prop-types';

import { getId, getColor } from '../../../../utils/defval/get-data-with-defval';

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

Badge.propTypes = {
    badgeList: array
};

export default function Badge({ badgeList }) {

    return (
        <div className="badge">
            {
                badgeList.map(
                    item =>
                        <div key={getId(item)} className={`badge__icons ${getColor(item)}`}>
                            {renderContent(item)}
                        </div>
                )
            }
        </div>
    );
}
