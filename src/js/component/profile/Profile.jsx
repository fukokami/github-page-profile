'use strict';

import React from 'react';

import Info from './widget/Info.jsx';
import Skill from './widget/Skill.jsx';

import { getProfileInfo, getProfileSkill } from '../../ajax/get-profile';

import { getHeader, getBloc } from '../../utils/defval/get-data-with-defval';

const profileInfo = getProfileInfo();
const profileSkill = getProfileSkill();

export default function Profile() {

    return (
        <div className="profile">
            <div className="profile__content">
                <h1 className="ribbon">{getHeader(profileInfo)}</h1>
                <Info infoList={getBloc(profileInfo)} />
            </div>
            <div className="profile__content">
                <h1 className="ribbon">{getHeader(profileSkill)}</h1>
                <Skill skillList={getBloc(profileSkill)} />
            </div>
        </div>
    );
}