'use strict';

import React from 'react';
import { string } from 'prop-types';

Details.propTypes = {
    name: string,
    job: string
};

export default function Details({ name, job }) {
    return (
        <div className="avatar__details">
            <h3 className="my-5 text-center">{name}</h3>
            <div className="font-size-small text-center">{job}</div>
        </div>
    );
}


