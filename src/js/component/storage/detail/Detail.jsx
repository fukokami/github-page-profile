'use strict';


import { always, and, compose, concat, converge, equals, head, identity, ifElse, join, last, length, map, mergeRight, omit, path, pipe, split, tail, useWith as ramdaUseWith } from 'ramda';

import React from 'react';
import { useSelector } from 'react-redux';

import Description from '../widget/Description.jsx';
import InfoBox from './InfoBox.jsx';

import { STORAGE } from '../../../constants/tabList';

import { getStorageDetail } from '../../../ajax/get-storage';
import { getIcon, getId, getListBox, getTitle, getOption, getDescriptionComponent, getMoreInfoComponent, getColor } from '../../../utils/get-data-with-defval';


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

const getListBoxInfo =
    compose(
        converge(
            map,
            [
                compose(mergeRight, omit(['option'])),
                getOption,
            ]
        ),
        ramdaUseWith(
            mergeRight,
            [
                getMoreInfoComponent,
                getMoreInfoComponent
            ]
        )
    );

const appendClass = (condition, defaultClass = [], appendClass = []) => {

    return compose(
        join(' '),
        ifElse(
            identity,
            always(defaultClass),
            always(concat(defaultClass, appendClass))
        )
    )(condition);
};

export default function StorageDetail() {

    const currentStorage = useSelector(state => getDetailPath(state));
    const storageDetail = getStorageDetail(currentStorage);

    return (
        <div className="storage-detail">
            <ul className="list-box">
                {
                    getListBox(storageDetail).map(box => {

                        const baseDescComponent = getDescriptionComponent(storageDetail);
                        const descComponent = getDescriptionComponent(box);

                        const listInfoBox = getListBoxInfo(storageDetail, box);

                        return (
                            <li key={getId(box)} className="box">
                                <span className={appendClass(false, [getIcon(box)], [getColor(box)])}></span>
                                <div className="p-5">
                                    <h3>{getTitle(box)}</h3>
                                    {
                                        listInfoBox.length ? <div className="list-info-box">
                                            {
                                                listInfoBox.map(infoBox => {
                                                    return (
                                                        <InfoBox key={getId(infoBox)} infoBox={infoBox} />
                                                    );
                                                })
                                            }
                                        </div> : <></>
                                    }
                                    <Description baseDescComponent={baseDescComponent} descComponent={descComponent} />
                                </div>
                            </li>
                        );
                    })
                }
            </ul>
        </div>
    );
}