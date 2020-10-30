'use strict';


import React from 'react';

import Contact from './Contact.jsx';
import Link from './Link.jsx';
import Social from './Social.jsx';

export default function Info() {

    return (
        <div className="info">
            <Social />
            <div className="right">
                <Link />
                <Contact />
            </div>
        </div>
    );
}
