'use strict';


import { compose, converge, divide, identity, length, pipe, splitAt, __ } from 'ramda';

import React from 'react';

import { getFooterLink } from '../../../ajax/get-footer';

import { getId, getList, getTitle, getUrl } from '../../../utils/get-data-with-defval';


const listLink = getFooterLink();

const getCustomList = compose(
    converge(
        splitAt,
        [
            pipe(length, divide(__, 2)),
            identity
        ]
    ),
    getList
);


const renderItem = items => {
    return (
        items.map(item =>
            (
                <li key={getId(item)}>
                    <a href={getUrl(item)}>{getTitle(item)}</a>
                </li>
            )
        )
    );
};

export default function Link() {

    return (
        <div className="useful-link">
            <h3>{getTitle(listLink)}</h3>
            <hr />
            <div className="list-link">
                {
                    getCustomList(listLink).map(link => {
                        return (
                            <ul key={getId(link)}>
                                {
                                    renderItem(link)
                                }
                            </ul>
                        );
                    })
                }
            </div>
        </div>
    );
}