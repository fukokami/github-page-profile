'use strict';


import { compose, defaultTo, path } from 'ramda';

import data from './data/data.yaml';

import { INFO, SKILL } from '../constants/enum';

export const getProfileInfo = () => compose(
    defaultTo([]),
    path(['profile', INFO])
)(data);

export const getProfileSkill = () => compose(
    defaultTo([]),
    path(['profile', SKILL])
)(data); 