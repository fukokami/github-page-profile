'use strict';

import { always, compose, concat, identity, ifElse, join } from 'ramda';

const appendClass = (condition, defaultClass = [], appendClass = []) => {

    return compose(
        join(' '),
        ifElse(
            identity,
            always(concat(defaultClass, appendClass)),
            always(defaultClass),
        )
    )(condition);
};

export default appendClass;