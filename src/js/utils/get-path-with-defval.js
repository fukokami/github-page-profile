'use strict';

import { curry, defaultTo, pipe, path } from 'ramda';


const getPropWithDefval = curry(
    (pathArr, defval = '') => pipe(path(pathArr), defaultTo(defval))
);

export default getPropWithDefval;