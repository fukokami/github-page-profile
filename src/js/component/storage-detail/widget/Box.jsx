'use strict';


import { compose, converge, map, mergeRight, omit, useWith as ramdaUseWith } from 'ramda';

import React from 'react';
import { object } from 'prop-types';

import Description from './Description.jsx';
import InfoBox from './InfoBox.jsx';

import { getIcon, getId, getTitle, getOption, getDescriptionComponent, getColor, getMoreInfoComponent } from '../../../utils/defval/get-data-with-defval';


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

Box.propTypes = {
    box: object,
    storageDetail: object,
    baseDescComponent: object,
};

export default function Box({ box, storageDetail, baseDescComponent }) {

    const listInfoBox = getListBoxInfo(storageDetail, box);
    const descComponent = getDescriptionComponent(box);

    return (
        <li className="box">
            <span className={`${getIcon(box)} ${getColor(box)}`}></span>
            <div className="p-5">
                <h3>{getTitle(box)}</h3>

                <div className="box__info-list">
                    {
                        listInfoBox.map(
                            infoBox => <InfoBox key={getId(infoBox)} infoBox={infoBox} />
                        )
                    }
                </div>

                <Description baseDescComponent={baseDescComponent} descComponent={descComponent} />
            </div>
        </li>
    );
}