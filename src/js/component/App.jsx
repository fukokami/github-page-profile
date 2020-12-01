'use strict';


import { compose, prop } from 'ramda';

import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Switch, useLocation } from 'react-router-dom';

import AOS from 'aos';

import Navbar from './navbar/Navbar.jsx';
import Footer from './footer/Footer.jsx';
import Profile from './profile/Profile.jsx';
import Project from './project/Project.jsx';
import Storage from './storage/Storage.jsx';
import StorageDetail from './storage-detail/Detail.jsx';

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
        dispatch(selectTabAction(location));
    }, [dispatch, location]);

    return (
        <div className="container">

            <Navbar />

            <div className="page-content">

                <Switch>

                    <Route exact path="/" component={Profile} />

                    <Route exact path={`/${PROFILE}`} component={Profile} />

                    <Route exact path={`/${PROJECT}`} component={Project} />

                    <Route exact path={`/${STORAGE}`} component={Storage} />

                    <Route exact path={`/${STORAGE}/:type`} component={StorageDetail} />

                    <Route>
                        <div>404 Not Found</div>
                    </Route>
                </Switch>
            </div>

            <Footer />
        </div>
    );
}