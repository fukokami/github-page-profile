'use strict';


import { curry, subtract } from 'ramda';

const cache = curry(
    async (url, ttl, fetchApiFn) => {
        const now = Date.now();

        const expiredTimes = subtract(now, ttl);

        const responseCache = JSON.parse(localStorage.getItem(url));

        if (responseCache && responseCache.expiredTimes >= expiredTimes) {
            return responseCache.data;
        }

        const response = await fetchApiFn(url);

        const cacheData = JSON.stringify({
            expiredTimes: now,
            data: response
        });

        localStorage.setItem(url, cacheData);

        return response;
    }
);

export default cache;