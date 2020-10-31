'use strict';


import { compose, join, juxt } from 'ramda';

import React from 'react';
import { object } from 'prop-types';

import Icons from './Icons.jsx';

import { getStyleIcon, getCardTitle, getCardDateStart, getCardDateEnd, getCardIcons, getCardDescription } from '../../../utils/get-data-with-defval';

const getCustomCardDate = compose(
    join(' → '),
    juxt([
        getCardDateStart,
        getCardDateEnd,
    ])
);
export default function Row({ item }) {

    return (
        <div className="timeline">
            <div className="timeline-content">
                <span className="timeline-year">{getCustomCardDate(item)}</span>
                <div className="timeline-icon">
                    <i className={getStyleIcon(item)}></i>
                </div>
                <h3>{getCardTitle(item)}</h3>
                <Icons iconList={getCardIcons(item)} />
                <p>{getCardDescription(item)}</p>
            </div>
        </div>
    );
}

Row.propTypes = {
    item: object.isRequired,
};