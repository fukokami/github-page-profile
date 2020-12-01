'use strict';

import React from 'react';

import { getFooterSocial } from '../../../ajax/get-footer';

import { getId, getIcon, getColor, getUrl } from '../../../utils/defval/get-data-with-defval';

const socialList = getFooterSocial();

export default function Social() {

    return (
        <div className="footer__social">
            <img src="./images/default.jpg" alt="logo" />
            <br />
            <p className="w-100 mx-5 font-size-medium text-left">FOLLOW ME</p>
            <div className="d-flex-space-around w-100">
                {
                    socialList.map(
                        social => (
                            <a key={getId(social)} href={getUrl(social)} className={`circle font-size-large white ${getColor(social)}`}>
                                <i className={getIcon(social)}></i>
                            </a>
                        )
                    )
                }
            </div>
        </div>
    );
}