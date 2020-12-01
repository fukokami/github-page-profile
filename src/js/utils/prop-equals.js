'use strict';

import { prop, equals, compose, curry } from 'ramda';

const propEquals = curry(
    (src, desc) => compose(
        equals(desc),
        prop(src)
    )
);

export default propEquals;