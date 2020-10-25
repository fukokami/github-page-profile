'use strict';


import { compose, defaultTo, prop } from 'ramda';

import data from './data/data.yaml';

export const getStorageList = () => {
    return compose(
        defaultTo([]),
        prop('storage'),
    )(data);
};
