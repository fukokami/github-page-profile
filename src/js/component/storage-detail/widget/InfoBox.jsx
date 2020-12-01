'use strict';


import { concat, partialRight, unless } from 'ramda';

import React, { useEffect, useState } from 'react';
import { object } from 'prop-types';

import { getBaseUrl, getColor, getIcon, getPath, getProperty, getValue } from '../../../utils/defval/get-data-with-defval';
import getPropWithDefval from '../../../utils/defval/get-prop-with-defval';
import { isNumeric, shortenNumber } from '../../../utils/number-format';

import cache from '../../../ajax/api/cache';
import fetchApi from '../../../ajax/api/fetch-api';
import Axios from 'axios';
import { compose } from 'redux';

const ONE_DAY = 864E5;

InfoBox.propTypes = {
    infoBox: object
};

export default function InfoBox({ infoBox }) {

    const [val, setVal] = useState('???');

    useEffect(() => {
        const source = Axios.CancelToken.source();

        (async () => {

            switch (infoBox.type) {
                case 'api': {
                    const url = concat(
                        getBaseUrl(infoBox),
                        getPath(infoBox)
                    );

                    const property = getProperty(infoBox);
                    const fetchApiFn = partialRight(fetchApi, [{ cancelToken: source.token }]);
                    const response = await cache(url, ONE_DAY, fetchApiFn);

                    const customResponse = compose(
                        unless(
                            isNumeric,
                            shortenNumber,
                        ),
                        getPropWithDefval(property, 'Unknown')
                    );

                    setVal(customResponse(response));
                    break;
                }
                default:
                    setVal(getValue(infoBox));
            }
        })();

        return () => source.cancel();

    }, [infoBox]);

    return (
        <div className="box__info">
            <i className={`${getIcon(infoBox)} ${getColor(infoBox)}`}></i>
            <div>{val}</div>
        </div>
    );
}
