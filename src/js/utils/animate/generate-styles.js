'use strict';

import getPropWithDefval from '../defval/get-prop-with-defval';

const generateStyles = (state, style, options = {}) => {
    return {
        to: getPropWithDefval(state, {})(style),
        ...options
    };
};

export default generateStyles;