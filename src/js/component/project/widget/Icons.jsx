'use strict';


import React from 'react';
import { array } from 'prop-types';

import { getId, getIcon } from '../../../utils/get-data-with-defval';

export default function Icons({ iconList }) {

    return (
        <div className="card-icons">
            {
                iconList.map(icon => {
                    return (
                        <div key={getId(icon)} className="circle">
                            <i className={getIcon(icon)}></i>
                        </div>
                    );
                })
            }
        </div>
    );
}

Icons.propTypes = {
    iconList: array
};