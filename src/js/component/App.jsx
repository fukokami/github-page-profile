'use strict';


import { compose, prop } from 'ramda';

import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Switch, useLocation } from 'react-router-dom';

import AOS from 'aos';

import Navbar from './navbar/Navbar.jsx';
import Project from './project/Project.jsx';

import { selectTab } from '../actions/selectTab';
import { PROFILE, PROJECT, STORAGE } from '../constants/tabList';

const selectTabAction = compose(
    selectTab,
    prop('pathname'),
);


export default function App() {

    const location = useLocation();
    const dispatch = useDispatch();

    useEffect(() => {
        AOS.init({ delay: 200, duration: 700 });
    }, []);

    useEffect(() => {
        dispatch( selectTabAction(location) );
    }, [dispatch, location]);

    return (
        <div className="container">

            <Navbar />

            <Switch>

                <Route exact path="/">
                    <div>Profile Content</div>
                </Route>

                <Route exact path={`/${PROFILE}`} >
                    <div>Profile Content</div>
                </Route>

                <Route exact path={`/${PROJECT}`} component={Project} />

                <Route exact path={`/${STORAGE}`} >
                    <div>Storage Content</div>
                </Route>

                <Route>
                    <div>404 Not Found</div>
                </Route>
            </Switch>
        </div>
    );
}