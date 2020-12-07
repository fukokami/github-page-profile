'use strict';

import React from 'react';
import { bool, object } from 'prop-types';

import { getType, getIcon, getFrameHeader, getValue } from '../../../../utils/defval/get-data-with-defval';
import appendClass from '../../../../utils/append-class';

Frame.propTypes = {
    isReserve: bool,
    frame: object
};

export default function Frame({ isReserve, frame }) {

    return (
        <div className={appendClass(isReserve, ['frame', getType(frame)], ['reserve'])}>
            <div className="p-5 d-flex-center">
                <i className={getIcon(frame)}></i>
            </div>
            <div className={appendClass(isReserve, ['p-5'], ['text-right'])}>
                <h4>{getFrameHeader(frame)}</h4>
                <hr />
                <p>{getValue(frame)}</p>
            </div>
        </div>
    );
}
