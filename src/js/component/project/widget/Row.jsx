'use strict';


import { compose, join, juxt } from 'ramda';

import React from 'react';
import { object } from 'prop-types';

import Icons from './Icons.jsx';

import { getStyleIcon, getCardTitle, getCardDateStart, getCardDateEnd, getCardIcons, getCardDescription } from '../../../utils/defval/get-data-with-defval';

const getCustomCardDate = compose(
    join(' → '),
    juxt([
        getCardDateStart,
        getCardDateEnd,
    ])
);

Row.propTypes = {
    item: object.isRequired,
};

export default function Row({ item }) {

    return (
        <div className="timeline">
            <div className="timeline__row">
                <span className="font-large">{getCustomCardDate(item)}</span>
                <div className="timeline__icon">
                    <i className={getStyleIcon(item)}></i>
                </div>
                <h3 className="font-medium mb-5 text-upper text-secondary">{getCardTitle(item)}</h3>
                <Icons iconList={getCardIcons(item)} />
                <p className="font-size-small text-justify">{getCardDescription(item)}</p>
            </div>
        </div>
    );
}
