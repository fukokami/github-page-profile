'use strict';


import React from 'react';
import { array } from 'prop-types';

import { getId, getIcon } from '../../../utils/defval/get-data-with-defval';

Icons.propTypes = {
    iconList: array
};

export default function Icons({ iconList }) {

    return (
        <div className="timeline__icons">
            {
                iconList.map(
                    icon =>
                        <div key={getId(icon)} className="circle font-medium my-5 mr-5">
                            <i className={getIcon(icon)}></i>
                        </div>
                )
            }
        </div>
    );
}
