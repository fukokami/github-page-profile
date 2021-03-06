'use strict';

import { head } from 'ramda';

import { SELECT_TAB } from '../constants/actionTypes';
import tabList from '../constants/tabList';

const initTab = head(tabList);

export default (state = { tab: initTab}, action) => {
    switch (action.type) {
        case SELECT_TAB:
            return {
                ...state,
                tab: action.data
            };
        default:
            return state;
    }
};