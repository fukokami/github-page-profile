'use strict';

import Axios from 'axios';

const fetchApi = async (url, options = {}) => {

    const response = await Axios({
        url,
        ...options,
        method: options.method || 'GET',
        headers: {
            'Content-Type': 'application/json',
            ...options.headers
        },
    });

    return response.data;
};

export default fetchApi; 