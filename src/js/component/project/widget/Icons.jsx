'use strict';


import React from 'react';
import { array } from 'prop-types';

import getPropWithDefval from '../../../utils/get-prop-with-defval';


const getId = item => {
    const defval = Math.floor(Math.random() * 1000);

    return getPropWithDefval('id', defval)(item);
};
const getIcon = getPropWithDefval('icon', 'fa fa-question');

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