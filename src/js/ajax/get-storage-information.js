'use strict';


import { defaultTo } from 'ramda';
import storage from './data/storage.json';

export const getStorageList = () => defaultTo([])(storage);
