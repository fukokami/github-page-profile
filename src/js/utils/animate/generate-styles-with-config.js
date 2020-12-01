'use strict';

import { curry } from 'ramda';

import generateStyles from './generate-styles';

const generateStyleWithConfig = (style, options = {}) =>
    curry(
        (activeIndex, currentIndex) => {
            const state = currentIndex === activeIndex ? 'active' : 'inactive';

            return generateStyles(state, style, options);
        }
    );

export default generateStyleWithConfig;