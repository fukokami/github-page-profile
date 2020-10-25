'use strict';


import { always, compose, concat, identity, ifElse, join, path } from 'ramda';

import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { bool, object } from 'prop-types';

import getPropWithDefval from '../../../utils/get-prop-with-defval';
import { animated, useSpring } from 'react-spring';

import { DESCRIPTION_STYLE } from '../../../constants/storageStyles';

import generateStyleWithConfig from '../../../utils/animate/generate-styles-with-config';

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

const getIcon = getPropWithDefval('icon', 'fa fa-question');
const getTitle = getPropWithDefval('title', 'Unknown');
const getDescription = getPropWithDefval('description', 'Unknown');

const setDescriptionAnimation = generateStyleWithConfig(DESCRIPTION_STYLE, { delay: 300 });

export default function Label({ item, isActive }) {

    const [prop, set, stop] = useSpring(() => setDescriptionAnimation(isActive, !0));
    const currentTab = useSelector(state => path(['selectTab', 'tab'], state));
    const title = getTitle(item);
    const url = `${currentTab}/${title.toLowerCase()}`;

    useEffect(() => {
        stop();
        set(setDescriptionAnimation(isActive, !0));
    }, [isActive, set, stop]);

    return (
        <div className="label">
            <div className="icon">
                <i className={getIcon(item)}></i>
            </div>
            <div className="info">
                <div className="main">
                    {title}
                    <Link className="more" to={url} >More &#8811;</Link>
                </div>

                <animated.div
                    className={appendClass(isActive, ['sub'], ['hide'])}
                    style={{ width: isActive ? prop.width : '0px' }}
                >
                    {getDescription(item)}
                </animated.div>

            </div>
        </div>
    );
}

Label.propTypes = {
    item: object.isRequired,
    isActive: bool,
};