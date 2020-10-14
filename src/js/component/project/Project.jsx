'use strict';


import React from 'react';

import Row from './widget/Row.jsx';

import getProjectList from '../../ajax/get-project-list';
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
                userProject.map((item, index) => {
                    return <Row key={getId(item)} item={item} isReverse={index % 2 !== 0} />;
                })
            }
        </div>
    );
}