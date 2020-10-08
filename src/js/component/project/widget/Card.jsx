'use strict';


import { always, compose, ifElse, isNil, join, juxt } from 'ramda';

import React from 'react';
import PropTypes from 'prop-types';

import getPropWithDefval from '../../../utils/get-prop-with-defval';

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

export default function Card({ isReverse, name, card }) {

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
                            <div key={`${name}-${icon.name}`} className="circle">
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
    name: PropTypes.string.isRequired,
    card: PropTypes.object.isRequired
};