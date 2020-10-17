'use strict';


import { isNil, or, prop } from 'ramda';

import React from 'react';
import PropTypes from 'prop-types';

import Badge from './Badge.jsx';
import Card from './Card.jsx';

import getPropWithDefval from '../../../utils/get-prop-with-defval';


const getId = item => {
    const defval = Math.floor(Math.random() * 1000);

    return getPropWithDefval('id', defval)(item);
};
const getBadge = prop('badge');
const getCard = prop('card');

export default function Row({ item, isReverse }) {

    const id = getId(item);
    const badge = getBadge(item);
    const card = getCard(item);

    if (or(isNil(badge), isNil(card)))
        return null;

    return isReverse
        ? (
            <div className="row reserve">
                <Badge badge={badge} />
                <Card isReverse id={id} card={card} />
            </div>
        )
        : (
            <div className="row">
                <Badge badge={badge} />
                <Card id={id} card={card} />
            </div>
        );
}

Row.propTypes = {
    item: PropTypes.object.isRequired,
    isReverse: PropTypes.bool
};