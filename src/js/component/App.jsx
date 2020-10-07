'use strict';


import { always, compose, cond, equals, path, prop, replace, T } from 'ramda'

import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useLocation } from 'react-router-dom'

import AOS from 'aos'

import Navbar from './navbar/Navbar.jsx'
import Project from './project/Project.jsx'

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
        [ equals(PROJECT), always(<Project />)],
        [ equals(STORAGE), always(<div>Storage Content</div>)],
        [ T              , always(<div>404 Not Found</div>)]
    ])

export default function App() {

    const location = useLocation()
    const dispatch = useDispatch()

    const currentTab = useSelector(state => path( ['selectTab', 'tab'], state) )

    useEffect(() => {
        AOS.init({ delay: 500, duration: 1000})
    }, [])

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