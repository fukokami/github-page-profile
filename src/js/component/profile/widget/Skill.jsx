'use strict';


import { always, cond, propEq, T } from 'ramda';

import React from 'react';
import { array } from 'prop-types';

import Badge from './skill/Badge.jsx';
import Evaluate from './skill/Evaluate.jsx';

import { getId, getBlocHeader, getFrame } from '../../../utils/get-data-with-defval';

const renderSkillFrame = cond([
    [propEq('type', 'badge'), item => { return (<Badge badgeList={getFrame(item)} />); }],
    [propEq('type', 'evaluate'), item => { return (<Evaluate evaluateList={getFrame(item)} />); }],
    [T, always(null)]
]);

export default function Skill({ skillList }) {

    return (
        <div className="skill">
            {
                skillList.map(item => {
                    return (
                        <div key={getId(item)}>
                            <h2>{getBlocHeader(item)}</h2>
                            {
                                renderSkillFrame(item)
                            }
                        </div>
                    );
                })
            }
        </div>
    );
}

Skill.propTypes = {
    skillList: array
};