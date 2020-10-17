'use strict';


import { and, constructN, curry, equals, head, or, test } from 'ramda';
import tabList from '../constants/tabList';


const homeTab = head(tabList);

const checkPath = curry(
    (path, currentPath) => or(
        and(
            equals('/',     currentPath),
            equals(homeTab, path)
        ),
        test(
            constructN(1, RegExp)('(^/' + path +'$|^/' + path + '/)')
        )(currentPath)
    )
);

export default checkPath;