'use strict';


import React, { useState } from 'react';
import { useSprings, animated, config } from 'react-spring';

import ListBox from './widget/ListBox.jsx';
import Label from './widget/Label.jsx';

import { getStorageList } from '../../ajax/get-storage';
import getPropWithDefval from '../../utils/get-prop-with-defval';

import { CATEGORY_STYLE } from '../../constants/storageStyles';
import generateStyleWithConfig from '../../utils/animate/generate-styles-with-config';

const getId = item => {
    const defval = Math.floor(Math.random() * 1000);

    return getPropWithDefval('id', defval)(item);
};
const getListBox = getPropWithDefval('list-box', []);

const setCategoryAnimation = generateStyleWithConfig(CATEGORY_STYLE, { config: config.gentle });

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
                            className="category"
                            style={{ height: prop.height }}
                            onClick={categoryOnClick(index)}
                        >
                            <ListBox listBox={getListBox(item)} prop={prop} isActive={isActive} />
                            <Label item={item} isActive={isActive} />
                        </animated.div>
                    );
                })
            }
        </div>
    );
}