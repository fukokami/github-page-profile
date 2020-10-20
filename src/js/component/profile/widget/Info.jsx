'use strict';


import React from 'react';
import { array } from 'prop-types';

import Frame from './info/Frame.jsx';

import getPropWithDefval from '../../../utils/get-prop-with-defval';


const getId = item => {
    const defval = Math.floor(Math.random() * 1000);

    return getPropWithDefval('id', defval)(item);
};
const getSubHeader = getPropWithDefval('bloc_header', 'Unknown');
const getFrameList = getPropWithDefval('frame', []);

export default function Info({ infoList }) {

    return (
        <div className="info">
            {
                infoList.map(item => {
                    return (
                        <div key={getId(item)}>
                            <h2>{getSubHeader(item)}</h2>
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