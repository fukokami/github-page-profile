'use strict';

import { take } from 'ramda';

import React, { useState } from 'react';
import { useSprings, animated, config } from 'react-spring';

import ListBox from './widget/ListBox.jsx';
import Label from './widget/Label.jsx';

import { getStorageList } from '../../ajax/get-storage';
import { getId, getListBox, getDescriptionComponent } from '../../utils/defval/get-data-with-defval';

import { CATEGORY_STYLE } from '../../constants/storageStyles';
import generateStyleWithConfig from '../../utils/animate/generate-styles-with-config';

const setCategoryAnimation = generateStyleWithConfig(CATEGORY_STYLE, { config: config.gentle });

const MAX_ITEM = 4;

export default function Storage() {

    const DEFAULT_ACTIVE_FIELD = 0;
    const storageList = getStorageList();

    const [active, setActive] = useState(DEFAULT_ACTIVE_FIELD);
    const [categoryProps, setCategory] = useSprings(storageList.length, setCategoryAnimation(DEFAULT_ACTIVE_FIELD));

    const categoryOnClick = index => () => {
        setActive(index);
        setCategory(setCategoryAnimation(index));
    };

    return (
        <div className="storage">
            {
                categoryProps.map((prop, index) => {

                    const item = storageList[index];
                    const isActive = active === index;

                    return (
                        <animated.div
                            key={getId(item)}
                            className="storage__category"
                            style={{ height: prop.height, borderRadius: prop.borderRadius, backgroundColor: prop.backgroundColor }}
                            onClick={categoryOnClick(index)}
                        >
                            <ListBox listBox={take(MAX_ITEM, getListBox(item))} baseDescComponent={getDescriptionComponent(item)} prop={prop} isActive={isActive} />
                            <Label item={item} isActive={isActive} />
                        </animated.div>
                    );
                })
            }
        </div>
    );
}