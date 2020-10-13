'use strict';

import { isEmpty, take } from 'ramda';

import React from 'react';
import PropTypes from 'prop-types';

import Title from './Title.jsx';
import Box from './Box.jsx';

import getPropWithDefval from '../../../utils/get-prop-with-defval';


const getName = item => {
    const defval = Math.floor( Math.random() * 1000 ); 

    return getPropWithDefval('name', defval)(item);
};
const getTitle = getPropWithDefval('title', 'Unknown');
const getListBox = getPropWithDefval('listBox', []);
const chunkFour = take(4);

export default function Field({ field }) {

    const title = getTitle(field);
    const listBox = getListBox(field);

    return (
        <div className="field">
            <div className="title-area">
                <Title title={title} total={listBox.length} />
            </div>
            <div className="box-area">
                {
                    isEmpty(listBox) 
                    ? <p>Nothing here...</p>
                    : chunkFour(listBox).map(box => {
                        return (
                            <Box key={getName(box)} box={box} />
                        );
                    })
                }
            </div>
        </div>
    );
}

Field.propTypes = {
    field: PropTypes.object
};