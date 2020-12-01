'use strict';

import { compose, defaultTo, filter, mergeAll, prop, propEq } from 'ramda';

import data from './data/data.yaml';

export const getStorageList = () => {
    return compose(
        defaultTo([]),
        prop('storage'),
    )(data);
};

export const getStorageDetail = (category) => {
    return compose(
        defaultTo({}),
        mergeAll,
        filter(propEq('name', category)),
        prop('storage')
    )(data);
};