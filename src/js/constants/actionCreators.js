'use strict';

import { curry } from 'ramda';
import {
    SELECT_TAB
} from './actionTypes'

const actionCreator = curry(
    (type, data) => ({ type, data })
)

export const selectTab = actionCreator( SELECT_TAB )