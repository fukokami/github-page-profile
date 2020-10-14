'use strict';


import { always, compose, ifElse, isNil, join, juxt } from 'ramda';

import React from 'react';
import PropTypes from 'prop-types';

import getPropWithDefval from '../../../utils/get-prop-with-defval';

const getId = item => {
    const defval = Math.floor(Math.random() * 1000);

    return getPropWithDefval('id', defval)(item);
};
const getContent = getPropWithDefval('content', 'Unknown');
const getDate = compose(
    join(' → '),
    juxt([
        getPropWithDefval('start', '???'),
        getPropWithDefval('end', '???')
    ])
);
const getIcons = getPropWithDefval('icons', []);
const getDescription = getPropWithDefval('description', 'Nothing...');

const reserveClass =
    ifElse(
        isNil,
        always('title reserve'),
        always('title')
    );

export default function Card({ isReverse, id, card }) {

    const content = getContent(card);
    const date = getDate(card);
    const icons = getIcons(card);
    const description = getDescription(card);

    return (
        <div className="card">
            <div className={reserveClass(isReverse)}>
                <div className="content">
                    {content}
                </div>
                <div className="date">
                    {date}
                </div>
            </div>
            <div className="icon">
                {
                    icons.map(icon => {
                        return (
                            <div key={`${id}-${getId(icon)}`} className="circle">
                                <i className={icon.icon}></i>
                            </div>
                        );
                    })
                }
            </div>
            <div className="description"> {description}</div>
        </div>
    );
}

Card.propTypes = {
    isReverse: PropTypes.bool,
    id: PropTypes.oneOfType([
        PropTypes.string.isRequired,
        PropTypes.number.isRequired,
    ]),
    card: PropTypes.object.isRequired
};