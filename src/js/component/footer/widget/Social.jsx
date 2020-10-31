'use strict';


import React from 'react';

import { getFooterSocial } from '../../../ajax/get-footer';

import { getId, getIcon, getColor, getUrl } from '../../../utils/get-data-with-defval';


const socialList = getFooterSocial();

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