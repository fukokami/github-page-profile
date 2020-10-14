'use strict';


import React from 'react';

import Field from './widget/Field.jsx';

import getStorageList from '../../ajax/get-storage-list.js';
import getPropWithDefval from '../../utils/get-prop-with-defval';

const storageList = getStorageList();

const getId = item => {
    const defval = Math.floor(Math.random() * 1000);

    return getPropWithDefval('id', defval)(item);
};


export default function Storage() {

    return (
        <div className="storage">
            {
                storageList.map(field => {
                    return (
                        <Field key={getId(field)} field={field} />
                    );
                })
            }
        </div>
    );
}