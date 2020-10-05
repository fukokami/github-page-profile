'use strict';


import { head, includes } from 'ramda'

import { SELECT_TAB } from '../constants/actionTypes'
import tabList from '../constants/local/tabList'


const initTab = head(tabList)

export default (state = { tab: initTab}, action) => {
    switch (action.type) {
        case SELECT_TAB:
            return {
                ...state,
                tab: includes(action.data, tabList) ? action.data : initTab
            }
        default:
            return state
    }
}