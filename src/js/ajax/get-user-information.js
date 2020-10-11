'use strict';


import { compose, defaultTo, prop } from 'ramda';
import data from './data/user.json';

export const getUserInfo = () => compose(
    defaultTo({}),
    prop('user')
)(data);

export const getUserProject = () => compose(
    defaultTo([]),
    prop('project')
)(data); 