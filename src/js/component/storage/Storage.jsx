'use strict';


import React from 'react';

import Field from './widget/Field.jsx';

import { getStorageList } from '../../ajax/get-storage-information';
import getPropWithDefval from '../../utils/get-prop-with-defval';

const storageList = getStorageList();

const getName = item => {
    const defval = Math.floor( Math.random() * 1000 ); 

    return getPropWithDefval('name', defval)(item);
};


export default function Storage() {

    return (
        <div className="storage">
            {
                storageList.map( field => {
                    return (
                        <Field key={getName(field)} field={field}/>
                    );
                })
            }
        </div>
    );
}