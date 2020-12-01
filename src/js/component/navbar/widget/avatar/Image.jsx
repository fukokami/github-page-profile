'use strict';

import React from 'react';
import { string } from 'prop-types';

Image.propTypes = {
    src: string
};

export default function Image({ src }) {
    return (
        <div className="avatar__image">
            <img src={src} alt="avatar" />
        </div>
    );
}

