'use strict';

import { always, apply, compose, cond, converge, equals, head, identity, map, match, nthArg, replace, split, T, trim } from 'ramda';

import generateTime from './generate-time';

const type =
    converge(
        equals,
        [
            compose(
                head,
                map(trim),
                split('.'),
                replace(/<%/, ''),
                replace(/%>/, ''),
                nthArg(1)
            ),
            nthArg(0)
        ]
    );
/**
 * type: time,...
 * format: string, int,..
 * value: now, number,...
 */
const generateSpecialData = cond([
    [type('time'), generateTime],
    [T, identity]
]);


const build = compose(
    (arr) => {
        if (arr.length > 0)
            return apply(compose)(arr);

        return always(identity)(arr);
    },
    map(generateSpecialData),
    match(/<%[0-9a-z.]*%>/g),
);

export default build;