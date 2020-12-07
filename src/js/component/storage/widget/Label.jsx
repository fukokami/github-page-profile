'use strict';

import { path } from 'ramda';

import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { bool, object } from 'prop-types';

import { getIcon, getTitle, getDescription } from '../../../utils/defval/get-data-with-defval';
import { animated, useSpring } from 'react-spring';

import { DESCRIPTION_STYLE } from '../../../constants/storageStyles';

import generateStyleWithConfig from '../../../utils/animate/generate-styles-with-config';
import appendClass from '../../../utils/append-class';

const setDescriptionAnimation = generateStyleWithConfig(DESCRIPTION_STYLE, { delay: 300 });

Label.propTypes = {
    item: object.isRequired,
    isActive: bool,
};

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
        <div className="category__label">
            <div className="circle label__icon">
                <i className={getIcon(item)}></i>
            </div>
            <div className={`d-flex-justify-center flex-col w-100 ml-5 ${isActive ? 'text-black' : 'text-white'}`}>
                <div className="label__main font-medium">
                    {title}
                    <Link className={`font-size-small ${isActive ? 'text-black' : 'text-white'}`} to={url} >More &#8811;</Link>
                </div>

                <animated.div
                    className={appendClass(!isActive, ['label__sub font-size-small'], ['hide'])}
                    style={{ width: isActive ? prop.width : '0px' }}
                >
                    {getDescription(item)}
                </animated.div>

            </div>
        </div>
    );
}
