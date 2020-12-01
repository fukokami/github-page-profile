'use strict';


import React from 'react';

import scrollToTop from '../../../utils/scroll-to-top';

export default function License() {

    return (
        <div className="d-flex-space-between secondary">
            <div className="p-1">Copyright © 2019, All Right Reserved Fukokami</div>
            <div className="m-1 back-to-top" onClick={scrollToTop}>
                <i className="fas fa-arrow-up"></i>
            </div>
        </div>
    );
}