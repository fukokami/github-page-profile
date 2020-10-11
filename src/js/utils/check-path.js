'use strict';


import { constructN, curry, test } from 'ramda';


const checkPath = curry(
    (path, currentPath) => test(
        constructN(1, RegExp)('(^/' + path +'$|^/' + path + '/)')
    )(currentPath)
);

export default checkPath;