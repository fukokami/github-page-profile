'use strict';


import { prop } from 'ramda'
import data from './data/user.json'

export const getUserInfo = () => prop('user')(data)