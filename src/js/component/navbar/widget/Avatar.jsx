'use strict';


import React from 'react';

import { getUserInfo } from '../../../ajax/get-user-information';

import getPropWithDefval from '../../../utils/get-prop-with-defval';

const getName = getPropWithDefval('name', 'Unknown');
const getJob = getPropWithDefval('job', 'Unknown');
const getSocial = getPropWithDefval('social', []);

export default function Avatar() {

    const userInfo = getUserInfo();

    return (
        <div className="card-wrapper">

            <div className="card">

                <div className="card-image">
                    <img src="./images/avt.jpg" alt="avatar" />
                </div>

                <ul className="social-icons">
                    {
                        getSocial(userInfo).map(item => {
                            return (
                                <li key={`social-${item.name}`}>
                                    <a href={item.url} target="_blank" rel="noopener noreferrer">
                                        <i className={item.icon}></i>
                                    </a>
                                </li>
                            );
                        })
                    }
                </ul>

                <div className="details">
                    <h3>{ getName(userInfo) }</h3>
                    <div className="job-title">{ getJob(userInfo) }</div>
                </div>
            </div>
        </div>
    );
}