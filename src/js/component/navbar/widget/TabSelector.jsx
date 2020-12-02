'use strict';

import { path } from 'ramda';

import React, { useRef } from 'react';
import { bool } from 'prop-types';
import { useSpring, useTrail, useChain, animated, config } from 'react-spring';
import { useSelector } from 'react-redux';
import { useMediaQuery } from 'react-responsive';

import TabChild from './tab-selector/TabChild.jsx';

import tabList from '../../../constants/tabList';

TabSelector.propTypes = {
    isOpen: bool
};

export default function TabSelector({ isOpen }) {

    const currentTab = useSelector(state => path(['selectTab', 'tab'], state));

    const isMobile = useMediaQuery({ query: '(max-width: 768px)' });

    const springRef = useRef();
    const props = useSpring({
        left: isOpen ? '0%' : '-100%',
        ref: springRef
    });

    const trailRef = useRef();
    const trail = useTrail(tabList.length, {
        left: isOpen ? '0%' : '-100%',
        config: config.gentle,
        ref: trailRef,
    });

    useChain(isOpen ? [springRef, trailRef] : [trailRef, springRef], [0, 0.4]);

    return (
        <animated.div className="tab-selector m-1" style={isMobile ? props : {}}>
            {
                trail.map(
                    (props, index) => <TabChild key={tabList[index]} tab={tabList[index]} currentTab={currentTab} style={isMobile ? props : {}} />
                )
            }
        </animated.div>

    );
}