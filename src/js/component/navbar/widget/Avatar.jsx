'use strict';

import React from 'react';

import Image from './avatar/Image.jsx';
import Icons from './avatar/Icons.jsx';
import Details from './avatar/Details.jsx';

import { getUserInfo } from '../../../ajax/get-user';

import { getName, getJob, getSocial, getImage } from '../../../utils/defval/get-data-with-defval';

const userInfo = getUserInfo();

export default function Avatar() {

    return (
        <div className="avatar">

            <Image src={getImage(userInfo)} />

            <Icons icons={getSocial(userInfo)} />

            <Details name={getName(userInfo)} job={getJob(userInfo)} />
        </div>
    );
}