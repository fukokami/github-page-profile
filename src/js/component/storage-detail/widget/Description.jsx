'use strict';


import { concat, mergeRight, partialRight } from 'ramda';

import React, { useEffect, useState } from 'react';
import { string, object, oneOfType } from 'prop-types';

import { getProperty, getBaseUrl, getPath, getValue } from '../../../utils/defval/get-data-with-defval';
import getPropWithDefval from '../../../utils/defval/get-prop-with-defval';

import cache from '../../../ajax/api/cache';
import fetchApi from '../../../ajax/api/fetch-api';
import Axios from 'axios';


const ONE_DAY = 864E5;

Description.propTypes = {
    descComponent: oneOfType([string, object]),
    baseDescComponent: object
};

export default function Description({ descComponent, baseDescComponent }) {

    const [desc, setDesc] = useState('Loading ...');


    useEffect(() => {
        const source = Axios.CancelToken.source();

        (async () => {

            const descriptionComponent = mergeRight(baseDescComponent, descComponent);

            switch (descriptionComponent.type) {
                case 'api': {
                    const url = concat(
                        getBaseUrl(descriptionComponent),
                        getPath(descriptionComponent)
                    );
                    const property = getProperty(descriptionComponent);
                    const fetchApiFn = partialRight(fetchApi, [{ cancelToken: source.token }]);
                    const response = await cache(url, ONE_DAY, fetchApiFn);

                    setDesc(getPropWithDefval(property, 'Unknown')(response));
                    break;
                }
                default:
                    setDesc(getValue(descriptionComponent));
            }

        })();

        return () => source.cancel();

    }, [descComponent, baseDescComponent]);

    return (
        <div className="box__description">
            {desc}
        </div>
    );
}
