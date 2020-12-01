'use strict';

import React from 'react';
import { string } from 'prop-types';

import checkPath from '../../../../utils/check-path';
import appendClass from '../../../../utils/append-class';

TabChild.propTypes = {
    tab: string,
    currentTab: string,
};

export default function TabChild({ tab, currentTab }) {

    return (
        <a className={appendClass(checkPath(tab, currentTab), ['tab-selector__child'], ['tab-selector__child--active'])} href={`#${tab}`} >
            {tab}
        </a>
    );
}