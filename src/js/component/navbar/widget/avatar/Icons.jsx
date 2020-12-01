'use strict';

import React from 'react';
import { array } from 'prop-types';

import { getId, getUrl, getIcon } from '../../../../utils/defval/get-data-with-defval';

Icons.propTypes = {
    icons: array
};

export default function Icons({ icons }) {
    return (
        <ul className="avatar__icons">
            {
                icons.map(
                    icon => (
                        <li key={getId(icon)}>
                            <a href={getUrl(icon)} className="circle font-large mx-5" target="_blank" rel="noopener noreferrer" tabIndex="-1">
                                <i className={getIcon(icon)}></i>
                            </a>
                        </li>
                    )
                )
            }
        </ul>
    );
}

