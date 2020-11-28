'use strict';


import React from 'react';
import { array } from 'prop-types';

import Frame from './info/Frame.jsx';

import { getId, getBlocHeader, getFrameList } from '../../../utils/get-data-with-defval';

export default function Info({ infoList }) {

    return (
        <div className="info">
            {
                infoList.map(item => {
                    return (
                        <div key={getId(item)}>
                            <h2>{getBlocHeader(item)}</h2>
                            <hr />
                            <div className="bloc">
                                {
                                    getFrameList(item).map((frame, index) => {
                                        const isReserve = index % 2 === 0;
                                        return (
                                            <Frame key={getId(frame)} isReserve={isReserve} frame={frame} />
                                        );
                                    })
                                }
                            </div>
                        </div>
                    );
                })
            }
        </div>
    );
}

Info.propTypes = {
    infoList: array
};