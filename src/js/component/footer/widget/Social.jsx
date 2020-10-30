'use strict';


import React from 'react';

import { getFooterSocial } from '../../../ajax/get-footer';

import getPropWithDefval from '../../../utils/get-prop-with-defval';


const socialList = getFooterSocial();

const getId = item => {
    const defval = Math.floor(Math.random() * 1000);

    return getPropWithDefval('id', defval)(item);
};
const getIcon = getPropWithDefval('icon', 'fa fa-question');
const getColor = getPropWithDefval('color', '');
const getUrl = getPropWithDefval('url', '#');

export default function Social() {

    return (
        <div className="social-link">
            <img src="./images/logo.png" alt="logo" />
            <div>
                <p>Follow me</p>
                <div className="social-icons">
                    {
                        socialList.map(social => {
                            return (
                                <li key={getId(social)}>
                                    <a href={getUrl(social)} className={getColor(social)}>
                                        <i className={getIcon(social)}></i>
                                    </a>
                                </li>
                            );
                        })
                    }
                </div>
            </div>
        </div>
    );
}