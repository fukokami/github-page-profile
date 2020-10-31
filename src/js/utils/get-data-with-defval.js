'use strict';


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
export const getColor = getPropWithDefval('color', '');
export const getName = getPropWithDefval('name', 'Unknown');
export const getJob = getPropWithDefval('job', 'Unknown');
export const getSocial = getPropWithDefval('social', []);
export const getHeader = getPropWithDefval('header', 'Unknown');
export const getBloc = getPropWithDefval('bloc', []);
export const getBlocHeader = getPropWithDefval('bloc_header', 'Unknown');
export const getFrame = getPropWithDefval('frame', []);
export const getSubHeader = getPropWithDefval('bloc_header', 'Unknown');
export const getFrameList = getPropWithDefval('frame', []);
export const getType = getPropWithDefval('class_size', 'half');
export const getFrameHeader = getPropWithDefval('frame_header', 'Unknown');
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