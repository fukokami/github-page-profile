'use strict';


import { compose, converge, divide, identity, length, pipe, splitAt, __ } from 'ramda';

import React from 'react';

import { getFooterLink } from '../../../ajax/get-footer';

import getPropWithDefval from '../../../utils/get-prop-with-defval';


const listLink = getFooterLink();

const getId = item => {
    const defval = Math.floor(Math.random() * 1000);

    return getPropWithDefval('id', defval)(item);
};
const getTitle = getPropWithDefval('title', 'Unknown');
const getUrl = getPropWithDefval('url', '#/profile');
const getList = compose(
    converge(
        splitAt,
        [
            pipe(length, divide(__, 2)),
            identity
        ]
    ),
    getPropWithDefval('list', [])
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
                    getList(listLink).map(link => {
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