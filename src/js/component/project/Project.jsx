'use strict';


import React from 'react';

import Row from './widget/Row.jsx';

import { getProjectList } from '../../ajax/get-project';
import { getId } from '../../utils/defval/get-data-with-defval';


const userProject = getProjectList();

export default function Project() {

    return (
        <div className="project">
            {
                userProject.map(
                    item => <Row key={getId(item)} item={item} />
                )
            }
        </div>
    );
}