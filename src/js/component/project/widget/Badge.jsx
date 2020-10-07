'use strict';


import React from 'react'

import getPropWithDefval from '../../../utils/get-prop-with-defval'

const getText = getPropWithDefval('text', '')
const getColor = getPropWithDefval('color', 'green')
const getIcon = getPropWithDefval('icon', 'fa fa-question')

export default function Badge({ badge }) {

    const text = getText(badge)
    const color = getColor(badge)
    const icon = getIcon(badge)

    return (
        <div className="badge-area">
            <div className={`badge ${color}`}>
                <div className="circle">
                    <i className={icon}></i>
                </div>
                <div className="ribbon">{text}</div>
            </div>
        </div>
    )
}