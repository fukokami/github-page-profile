'use strict';


import { isNil, or, prop } from 'ramda';

import React from 'react';
import PropTypes from 'prop-types';

import Badge from './widget/Badge.jsx';
import Card from './widget/Card.jsx';

import { getUserProject } from '../../ajax/get-user-information';
import getPropWithDefval from '../../utils/get-prop-with-defval';


const userProject = getUserProject();

const getName = item => {
    const defval = Math.floor( Math.random() * 1000 ); 

    return getPropWithDefval('name', defval)(item);
};
const getBadge = prop('badge');
const getCard = prop('card');

function Row({ item, isReverse }) {

    const name = getName(item);
    const badge = getBadge(item);
    const card = getCard(item);

    if (or(isNil(badge), isNil(card)))
        return null;

    return isReverse
        ? (
            <div data-aos="fade-up-left" className="row reserve">
                <Badge name={name} badge={badge} />
                <Card isReverse name={name} card={card} />
            </div>
        )
        : (
            <div data-aos="fade-up-right" className="row">
                <Badge name={name} badge={badge} />
                <Card name={name} card={card} />
            </div>
        );
}

Row.propTypes = {
    item: PropTypes.object.isRequired,
    isReverse: PropTypes.bool
};

export default function Project() {

    return (
        <div className="project">
            {
                userProject.map((item, index) => {
                    return <Row key={getName(item)} item={item} isReverse={index % 2 !== 0} />;
                })
            }
        </div>
    );
}