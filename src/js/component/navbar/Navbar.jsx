'use strict';


import React from 'react';
import Avatar from './widget/Avatar.jsx';
import TabSelector from './widget/TabSelector.jsx';

export default function Navbar() {

    return (
        <div className="no-select navbar">

            <div className="avatar-area">
                <Avatar />
            </div>
            
            <div className="menu-area">
                <TabSelector />
            </div>
        </div>
    );
}