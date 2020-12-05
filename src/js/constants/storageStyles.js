'use strict';

// Category
const CATEGORY_INACTIVE_HEIGHT = '4em';
const CATEGORY_INACTIVE_ZOOM = 3;
const CATEGORY_INACTIVE_OPACITY = 0;
const CATEGORY_INACTIVE_BACKGROUND = '#2f3640';
const CATEGORY_INACTIVE_RADIUS = '2em';

const CATEGORY_ACTIVE_HEIGHT = '33em';
const CATEGORY_ACTIVE_ZOOM = 1;
const CATEGORY_ACTIVE_OPACITY = 1;
const CATEGORY_ACTIVE_BACKGROUND = '#ffffff';
const CATEGORY_ACTIVE_RADIUS = '1em';

export const CATEGORY_STYLE = {
    active: {
        height: CATEGORY_ACTIVE_HEIGHT,
        zoom: CATEGORY_ACTIVE_ZOOM,
        opacity: CATEGORY_ACTIVE_OPACITY,
        backgroundColor: CATEGORY_ACTIVE_BACKGROUND,
        borderRadius: CATEGORY_ACTIVE_RADIUS,
    },
    inactive: {
        height: CATEGORY_INACTIVE_HEIGHT,
        zoom: CATEGORY_INACTIVE_ZOOM,
        opacity: CATEGORY_INACTIVE_OPACITY,
        backgroundColor: CATEGORY_INACTIVE_BACKGROUND,
        borderRadius: CATEGORY_INACTIVE_RADIUS,
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