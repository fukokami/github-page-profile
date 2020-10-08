'use strict';


import React from 'react';

import Row from './widget/Row.jsx';

import { getUserProject } from '../../ajax/get-user-information';
import getPropWithDefval from '../../utils/get-prop-with-defval';


const userProject = getUserProject();

const getName = item => {
    const defval = Math.floor( Math.random() * 1000 ); 

    return getPropWithDefval('name', defval)(item);
};

export default function Project() {

    return (
        <div className="project">
            {
                userProject.map((item, index) => {
                    return <Row key={getName(item)} item={item} isReverse={index % 2 !== 0} />;
                })
            }
        </div>
    );
}