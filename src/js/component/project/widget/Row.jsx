'use strict';


import { compose, join, juxt } from 'ramda';

import React from 'react';
import PropTypes from 'prop-types';

import Icons from './Icons.jsx';

import getPathWithDefval from '../../../utils/get-path-with-defval';

const getStyleIcon = getPathWithDefval(['style', 'icon'], 'fa fa-question');

const getCardTitle = getPathWithDefval(['card', 'title'], 'Unknown');
const getCardDate = compose(
    join(' → '),
    juxt([
        getPathWithDefval(['card', 'start'], '???'),
        getPathWithDefval(['card', 'end'], '???')
    ])
);
const getCardIcons = getPathWithDefval(['card', 'icons'], []);
const getCardDescription = getPathWithDefval(['card', 'description'], 'Nothing...');

export default function Row({ item }) {

    return (
        <div className="timeline">
            <div className="timeline-content">
                <span className="timeline-year">{getCardDate(item)}</span>
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
    item: PropTypes.object.isRequired,
};