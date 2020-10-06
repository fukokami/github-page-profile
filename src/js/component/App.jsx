'use strict';


import { always, compose, cond, equals, path, prop, replace, T } from 'ramda'

import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useLocation } from 'react-router-dom'

import Navbar from './navbar/Navbar.jsx'

import { selectTab } from '../actions/selectTab'
import { PROFILE, PROJECT, STORAGE } from '../constants/tabList'

const selectTabAction = compose(
    selectTab,
    replace(/\//g, ''),
    prop('pathname'),
)

const renderMain =
    cond([
        [ equals(PROFILE), always(<div>Profile Content</div>)],
        [ equals(PROJECT), always(<div>Project Content</div>)],
        [ equals(STORAGE), always(<div>Storage Content</div>)],
        [ T              , always(<div>404 Not Found</div>)]
    ])

export default function App() {

    const location = useLocation()
    const dispatch = useDispatch()

    const currentTab = useSelector(state => path( ['selectTab', 'tab'], state) )


    useEffect(() => {
        dispatch( selectTabAction(location) )
    }, [location])

    return (
        <div className="container">

            <Navbar />

            {
                renderMain(currentTab)
            }
        </div>
    );
}