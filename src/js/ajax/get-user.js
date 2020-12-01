'use strict';

import { compose, defaultTo, prop } from 'ramda';

import data from './data/data.yaml';

export const getUserInfo = () => {
    return compose(
        defaultTo({}),
        prop('user'),
    )(data);
};