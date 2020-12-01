'use strict';

import { compose, converge, divide, identity, length, pipe, splitAt, __ } from 'ramda';

import React from 'react';

import { getFooterLink } from '../../../ajax/get-footer';

import { getId, getList, getTitle, getUrl } from '../../../utils/defval/get-data-with-defval';

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

export default function Link() {

    return (
        <div className="flex-1 text-left">
            <h3>{getTitle(listLink)}</h3>
            <hr className="mr-a" />
            <div className="d-flex">
                {
                    getCustomList(listLink).map(
                        chunkedLinks => (
                            <div key={getId(chunkedLinks)} className="flex-1">
                                {
                                    chunkedLinks.map(
                                        link => <a key={getId(link)} className="d-block p-5" href={getUrl(link)} > {getTitle(link)}</a>
                                    )
                                }
                            </div>
                        )
                    )
                }
            </div>
        </div>
    );
}