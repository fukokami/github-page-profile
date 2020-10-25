'use strict';


import { compose, defaultTo, prop } from 'ramda';

import data from './data/data.yaml';

export const getProjectList = () => {
    return compose(
        defaultTo([]),
        prop('project'),
    )(data);
};