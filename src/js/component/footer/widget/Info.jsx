'use strict';

import React from 'react';

import Contact from './Contact.jsx';
import Link from './Link.jsx';
import Social from './Social.jsx';

export default function Info() {

    return (
        <div className="d-flex mx-a py-5 px-1">
            <Social />
            <div className="footer__content">
                <Link />
                <Contact />
            </div>
        </div>
    );
}
