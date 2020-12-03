'use strict';

import React from 'react';
import { useMediaQuery } from 'react-responsive';

import { getFooterContact } from '../../../ajax/get-footer';

import { getId, getTitle, getList, getIcon, getValue } from '../../../utils/defval/get-data-with-defval';
import appendClass from '../../../utils/append-class';

const contact = getFooterContact();

export default function Contact() {

    const isMobile = useMediaQuery({ query: '(max-width: 768px)' });

    return (
        <div className="flex-1 text-right">
            <h3>{getTitle(contact)}</h3>
            <hr className="ml-a" />
            {
                getList(contact).map(
                    item => (
                        <div key={getId(item)} className={appendClass(isMobile, ['d-inline-flex-center', 'p-5'], ['w-100', 'flex-row-reserve'])}>
                            {getValue(item)}
                            <i className={`${getIcon(item)} ${isMobile ? 'mr-1' : 'ml-1'} font-medium text-carrot`}></i>
                        </div>
                    )
                )
            }
        </div>
    );
}