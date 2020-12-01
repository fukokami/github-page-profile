'use strict';

import { compose, defaultTo, path } from 'ramda';

import data from './data/data.yaml';

import { SOCIAL, QUICK_LINK, CONTACT } from '../constants/enum';

export const getFooterSocial = () => compose(
    defaultTo({}),
    path(['footer', SOCIAL])
)(data);

export const getFooterLink = () => compose(
    defaultTo({}),
    path(['footer', QUICK_LINK])
)(data);

export const getFooterContact = () => compose(
    defaultTo({}),
    path(['footer', CONTACT])
)(data);