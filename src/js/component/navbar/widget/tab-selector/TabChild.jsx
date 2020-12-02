'use strict';

import React from 'react';
import { object, string } from 'prop-types';
import { animated } from 'react-spring';

import checkPath from '../../../../utils/check-path';
import appendClass from '../../../../utils/append-class';

TabChild.propTypes = {
    tab: string,
    currentTab: string,
    style: object
};

export default function TabChild({ tab, currentTab, style }) {

    return (
        <animated.a
            className={appendClass(checkPath(tab, currentTab), ['tab-selector__child'], ['tab-selector__child--active'])}
            style={style} href={`#${tab}`}
        >
            {tab}
        </animated.a>
    );
}