'use strict';

import { always, cond, propEq, T } from 'ramda';

import React from 'react';
import { array } from 'prop-types';

import Badge from './skill/Badge.jsx';
import Evaluate from './skill/Evaluate.jsx';

import { getId, getBlocHeader, getFrame } from '../../../utils/defval/get-data-with-defval';

const renderSkillFrame = cond([
    [propEq('type', 'badge'), item => <Badge badgeList={getFrame(item)} />],
    [propEq('type', 'evaluate'), item => <Evaluate evaluateList={getFrame(item)} />],
    [T, always(null)]
]);

Skill.propTypes = {
    skillList: array
};

export default function Skill({ skillList }) {

    return (
        <>
            {
                skillList.map(
                    item =>
                        <div key={getId(item)}>
                            <h2>{getBlocHeader(item)}</h2>
                            {
                                renderSkillFrame(item)
                            }
                        </div>
                )
            }
        </>
    );
}
