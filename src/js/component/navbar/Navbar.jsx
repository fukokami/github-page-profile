'use strict';


import React from 'react'
import TabSelector from './widget/TabSelector.jsx';

export default function Navbar() {

    return (
        <div className="navbar">
            {/* <img className="background-img" src="http://lorempixel.com/1200/500" alt="Background Image"/> */}
            <div className="avatar-area">
                <img className="avatar"
                     src="https://scontent-xsp1-2.xx.fbcdn.net/v/t1.0-9/22007496_656416544561747_5113525121689803570_n.jpg?_nc_cat=102&_nc_sid=09cbfe&_nc_ohc=19tfFcdsB8AAX8Lh004&_nc_ht=scontent-xsp1-2.xx&oh=121c37be465e12e8794ee9c660f536bc&oe=5F9E4C6C" 
                     alt="Avatar"/>
            </div>
            <div className="menu-area">
                <TabSelector />
            </div>
        </div>
    );
}