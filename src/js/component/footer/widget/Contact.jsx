'use strict';


import React from 'react';

import { getFooterContact } from '../../../ajax/get-footer';

import { getId, getTitle, getList, getIcon, getValue } from '../../../utils/defval/get-data-with-defval';


const contact = getFooterContact();

export default function Contact() {

    return (
        <div className="flex-1 text-right">
            <h3>{getTitle(contact)}</h3>
            <hr className="ml-a" />
            {
                getList(contact).map(
                    item => (
                        <div key={getId(item)} className="d-inline-flex-center p-5">
                            {getValue(item)}
                            <i className={`${getIcon(item)} ml-1 font-medium text-carrot`}></i>
                        </div>
                    )
                )
            }
        </div>
    );
}