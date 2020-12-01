'use strict';

import { path } from 'ramda';

import React from 'react';
import { useSelector } from 'react-redux';

import TabChild from './tab-selector/TabChild.jsx';

import tabList from '../../../constants/tabList';

export default function TabSelector() {

    const currentTab = useSelector(state => path(['selectTab', 'tab'], state));

    return (
        <div className="tab-selector">
            {
                tabList.map(tabName => <TabChild key={tabName} tab={tabName} currentTab={currentTab} />)
            }
        </div>

    );
}