'use strict';


import React from 'react';

import scrollToTop from '../../../utils/scroll-to-top';

export default function License() {

    return (
        <div className="license">
            <div className="container">
                <div className="copy-right">
                    Copyright © 2019, All Right Reserved Fukokami
                </div>
                <div className="back-to-top" onClick={scrollToTop}>
                    <i className="fas fa-arrow-up"></i>
                </div>
            </div>
        </div>
    );
}