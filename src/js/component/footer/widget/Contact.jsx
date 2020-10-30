'use strict';


import React from 'react';

import { getFooterContact } from '../../../ajax/get-footer';

import getPropWithDefval from '../../../utils/get-prop-with-defval';


const contact = getFooterContact();

const getId = item => {
    const defval = Math.floor(Math.random() * 1000);

    return getPropWithDefval('id', defval)(item);
};
const getTitle = getPropWithDefval('title', 'Unknown');
const getList = getPropWithDefval('list', []);
const getIcon = getPropWithDefval('icon', 'fa fa-question');
const getValue = getPropWithDefval('value', '???');

export default function Contact() {

    return (
        <div className="contact">
            <h3>{getTitle(contact)}</h3>
            <hr />
            {
                getList(contact).map(item => {
                    return (
                        <div key={getId(item)}>
                            {getValue(item)}
                            <i className={getIcon(item)}></i>
                        </div>
                    );
                })
            }
        </div>
    );
}