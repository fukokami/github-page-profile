'use strict';

import { always, ifElse, path } from 'ramda';

import React from 'react';
import { useSelector } from 'react-redux';

import tabList from '../../../constants/tabList';
import checkPath from '../../../utils/check-path';

const activeClass =
    ifElse(
        checkPath,
        always('active'),
        always('')
    );

export default function TabSelector() {

    const currentTab = useSelector(state => path(['selectTab', 'tab'], state));

    return (
        <ul className="menu-bar">
            {
                tabList.map(tabName => {
                    return (
                        <a key={`tab-${tabName}`} href={`#${tabName}`}>
                            <li className={activeClass(tabName, currentTab)} > {tabName} </li>
                        </a>
                    );
                })
            }
        </ul>

    );
}