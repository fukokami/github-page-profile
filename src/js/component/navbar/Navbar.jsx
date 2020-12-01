'use strict';

import React from 'react';
import Avatar from './widget/Avatar.jsx';
import TabSelector from './widget/TabSelector.jsx';

export default function Navbar() {

    return (
        <nav className="no-select">

            <Avatar />

            <TabSelector />
        </nav>
    );
}