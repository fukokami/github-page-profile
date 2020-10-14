'use strict';


import { compose, defaultTo, prop } from 'ramda';

import data from './data/data.yaml';

export default function getProjectList() {
    return compose(
        defaultTo([]),
        prop('project'),
    )(data);
}