'use strict';

import { always, equals, ifElse, path } from 'ramda';

import React from 'react';
import { useSelector } from 'react-redux';

import tabList from '../../../constants/tabList';

const activeClass =
    ifElse(
        equals,
        always('active'),
        always('')
    );

export default function TabSelector() {

    const currentTab = useSelector(state => path( ['selectTab', 'tab'], state) );

    return (
        <ul className="menu-bar">
        {
            tabList.map( tabName => {
                return (
                    <a key={`tab-${tabName}`} href={`#${tabName}`}>
                        <li className={ activeClass(currentTab, tabName) } > { tabName } </li>
                    </a>
                );  
            })
        }
        </ul>

    );
}