'use strict';


import React from 'react';
import { array } from 'prop-types';

import Frame from './info/Frame.jsx';

import { getId, getBlocHeader, getFrameList } from '../../../utils/defval/get-data-with-defval';

Info.propTypes = {
    infoList: array
};

export default function Info({ infoList }) {

    return (
        <>
            {
                infoList.map(
                    item =>
                        <div key={getId(item)}>
                            <h2>{getBlocHeader(item)}</h2>
                            <hr />
                            <div className="bloc">
                                {
                                    getFrameList(item).map(
                                        (frame, index) => <Frame key={getId(frame)} isReserve={index % 2 === 1} frame={frame} />
                                    )
                                }
                            </div>
                        </div>
                )
            }
        </>
    );
}
