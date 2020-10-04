'use strict';

import {
    ACTION_TEMPLATE
} from '../constants/actionTypes'

// TODO: remove
export default (state = { counter: 0 }, action) => {
    switch (action.type) {
        case ACTION_TEMPLATE:
            return {
                ...state,
                counter: state.counter + 1 || 0,
            }
        default:
            return state
    }
}