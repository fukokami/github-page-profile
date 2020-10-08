'use strict';


import { curry } from 'ramda';


const actionCreator = curry(
    (type, data) => ({ type, data })
);

export default actionCreator;