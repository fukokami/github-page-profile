'use strict';

import React from 'react';
import { useMediaQuery } from 'react-responsive';

import Contact from './Contact.jsx';
import Link from './Link.jsx';
import Social from './Social.jsx';

import appendClass from '../../../utils/append-class';

export default function Info() {

    const isMobile = useMediaQuery({ query: '(max-width: 768px)' });

    return (
        <div className={appendClass(isMobile, ['d-flex', 'mx-a', 'py-1', 'px-1'], ['flex-col-reserve'])}>
            <Social />
            <div className="footer__content">
                <Link />
                <Contact />
            </div>
        </div>
    );
}
