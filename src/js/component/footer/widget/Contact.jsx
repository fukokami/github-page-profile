'use strict';


import React from 'react';

import { getFooterContact } from '../../../ajax/get-footer';

import { getId, getTitle, getList, getIcon, getValue } from '../../../utils/get-data-with-defval';


const contact = getFooterContact();

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