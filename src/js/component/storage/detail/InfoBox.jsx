'use strict';


import { concat, partialRight, unless } from 'ramda';

import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import { getBaseUrl, getIcon, getPath, getProperty, getValue } from '../../../utils/get-data-with-defval';
import getPropWithDefval from '../../../utils/get-prop-with-defval';
import { isNumeric, shortenNumber } from '../../../utils/number-format';

import cache from '../../../ajax/api/cache';
import fetchApi from '../../../ajax/api/fetch-api';
import Axios from 'axios';
import { compose } from 'redux';


const ONE_DAY = 864E5;

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
        <div className="option-box">
            <i className={getIcon(infoBox)}></i>
            <div>{val}</div>
        </div>
    );
}

InfoBox.propTypes = {
    infoBox: PropTypes.object
};
