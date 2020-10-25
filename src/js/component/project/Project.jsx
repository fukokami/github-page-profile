'use strict';


import React from 'react';

import Row from './widget/Row.jsx';

import { getProjectList } from '../../ajax/get-project';
import getPropWithDefval from '../../utils/get-prop-with-defval';


const userProject = getProjectList();

const getId = item => {
    const defval = Math.floor(Math.random() * 1000);

    return getPropWithDefval('id', defval)(item);
};

export default function Project() {

    return (
        <div className="project">
            {
                userProject.map(item => {
                    return <Row key={getId(item)} item={item} />;
                })
            }
        </div>
    );
}