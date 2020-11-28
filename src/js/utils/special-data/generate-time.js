'use strict';

import { apply, compose, converge, identity, map, replace, split, tail, trim } from 'ramda';


import dateFormat from '../date/date-format';


const generateTime =
    converge(
        replace,
        [
            identity,
            compose(apply(dateFormat), tail, map(trim), split('.'), replace(/<%/, ''), replace(/%>/, ''),)
        ]
    );

export default generateTime;