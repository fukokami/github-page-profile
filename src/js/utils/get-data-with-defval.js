'use strict';

import { apply, call, compose, converge, identity, juxt, mergeRight, omit } from 'ramda';


import buildSpecialData from './special-data/build';

import getPropWithDefval from './get-prop-with-defval';
import getPathWithDefval from './get-path-with-defval';

/* *** Prop *** */
export const getId = item => {
    const defval = Math.floor(Math.random() * 1000);

    return getPropWithDefval('id', defval)(item);
};
export const getTitle = getPropWithDefval('title', 'Unknown');
export const getList = getPropWithDefval('list', []);
export const getIcon = getPropWithDefval('icon', 'fa fa-question');
export const getValue = getPropWithDefval('value', '???');
export const getDescription = getPropWithDefval('description', 'Unknown');
export const getUrl = getPropWithDefval('url', '#/profile');
export const getDescriptionComponent = compose(
    converge(
        mergeRight,
        [
            omit(['description', 'more-info']),
            getPropWithDefval('description', {})
        ]
    ),
    getPropWithDefval('component')
);
export const getMoreInfoComponent = compose(
    converge(
        mergeRight,
        [
            omit(['description', 'more-info']),
            getPropWithDefval('more-info', {})
        ]
    ),
    getPropWithDefval('component')
);
export const getOption = getPropWithDefval('option', []);
export const getPath = compose(
    apply(call),
    juxt([
        buildSpecialData,
        identity
    ]),
    getPropWithDefval('path', '')
);
export const getBaseUrl = getPropWithDefval('base-uri', '');
export const getProperty = getPropWithDefval('property', '');
export const getColor = getPropWithDefval('color', 'primary');
export const getName = getPropWithDefval('name', 'Unknown');
export const getJob = getPropWithDefval('job', 'Unknown');
export const getSocial = getPropWithDefval('social', []);
export const getHeader = getPropWithDefval('header', 'Unknown');
export const getBloc = getPropWithDefval('bloc', []);
export const getBlocHeader = getPropWithDefval('bloc-header', 'Unknown');
export const getFrame = getPropWithDefval('frame', []);
export const getFrameList = getPropWithDefval('frame', []);
export const getType = getPropWithDefval('class-size', 'half');
export const getFrameHeader = getPropWithDefval('frame-header', 'Unknown');
export const getEvaluate = getPropWithDefval('evaluate', []);
export const getPoint = getPropWithDefval('point', 0);
export const getListBox = getPropWithDefval('list-box', []);

/* *** Path *** */
export const getStyleIcon = getPathWithDefval(['style', 'icon'], 'fa fa-question');
export const getCardTitle = getPathWithDefval(['card', 'title'], 'Unknown');
export const getCardDateStart = getPathWithDefval(['card', 'start'], '???');
export const getCardDateEnd = getPathWithDefval(['card', 'end'], '???');
export const getCardIcons = getPathWithDefval(['card', 'icons'], []);
export const getCardDescription = getPathWithDefval(['card', 'description'], 'Nothing...');