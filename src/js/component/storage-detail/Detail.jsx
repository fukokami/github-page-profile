'use strict';


import { always, and, compose, equals, head, ifElse, last, length, path, pipe, split, tail } from 'ramda';

import React from 'react';
import { useSelector } from 'react-redux';

import Box from './widget/Box.jsx';

import { STORAGE } from '../../constants/tabList';

import { getStorageDetail } from '../../ajax/get-storage';
import { getId, getListBox, getDescriptionComponent } from '../../utils/defval/get-data-with-defval';


const getDetailPath =
    compose(
        ifElse(
            and(
                pipe(head, equals(STORAGE)),
                pipe(length, equals(2)),
            ),
            last,
            always('???')
        ),
        tail,
        split('/'),
        path(['selectTab', 'tab'])
    );

export default function StorageDetail() {

    const currentStorage = useSelector(state => getDetailPath(state));
    const storageDetail = getStorageDetail(currentStorage);
    const baseDescComponent = getDescriptionComponent(storageDetail);

    return (
        <div className="storage-detail">
            <ul className="list-box">
                {
                    getListBox(storageDetail).map(
                        box => <Box key={getId(box)} box={box} storageDetail={storageDetail} baseDescComponent={baseDescComponent} />
                    )
                }
            </ul>
        </div>
    );
}