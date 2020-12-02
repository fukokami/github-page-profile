'use strict';

import React, { useState } from 'react';
import Avatar from './widget/Avatar.jsx';
import Menu from './widget/Menu.jsx';
import TabSelector from './widget/TabSelector.jsx';

export default function Navbar() {

    const [open, setOpen] = useState(false);

    return (
        <nav className="no-select">

            <Avatar />

            <TabSelector isOpen={open} />

            <Menu isOpen={open} setOpen={setOpen} />
        </nav>
    );
}