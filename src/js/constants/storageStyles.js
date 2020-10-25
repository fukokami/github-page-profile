'use strict';


// Category
const CATEGORY_INACTIVE_HEIGHT = '4em';
const CATEGORY_INACTIVE_ZOOM = 3;
const CATEGORY_INACTIVE_OPACITY = 0;
const CATEGORY_INACTIVE_BACKGROUND = '#008000';

const CATEGORY_ACTIVE_HEIGHT = '20.5em';
const CATEGORY_ACTIVE_ZOOM = 1;
const CATEGORY_ACTIVE_OPACITY = 1;
const CATEGORY_ACTIVE_BACKGROUND = '#e6e2c8';

export const CATEGORY_STYLE = {
    active: {
        height: CATEGORY_ACTIVE_HEIGHT,
        zoom: CATEGORY_ACTIVE_ZOOM,
        opacity: CATEGORY_ACTIVE_OPACITY,
        backgroundColor: CATEGORY_ACTIVE_BACKGROUND,
    },
    inactive: {
        height: CATEGORY_INACTIVE_HEIGHT,
        zoom: CATEGORY_INACTIVE_ZOOM,
        opacity: CATEGORY_INACTIVE_OPACITY,
        backgroundColor: CATEGORY_INACTIVE_BACKGROUND,
    }
};

// Description
const DESCRIPTION_INACTIVE_WIDTH = '0em';
const DESCRIPTION_ACTIVE_WIDTH = '44em';

export const DESCRIPTION_STYLE = {
    active: {
        width: DESCRIPTION_ACTIVE_WIDTH,
    },
    inactive: {
        width: DESCRIPTION_INACTIVE_WIDTH
    }
};