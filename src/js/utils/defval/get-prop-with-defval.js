'use strict';

import { curry, defaultTo, pipe, prop } from 'ramda';

const getPropWithDefval = curry(
    (propName, defval = '') => pipe( prop(propName), defaultTo(defval) )
);

export default getPropWithDefval;