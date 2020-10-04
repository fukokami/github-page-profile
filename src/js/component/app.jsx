'use strict';

import { compose, path, defaultTo } from 'ramda'

import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Switch, Route } from 'react-router-dom'

export default function App() {

    const count = useSelector(state => {
        const defVal = compose(
            defaultTo(0),
            path(['template', 'counter'])
        )
        return defVal(state)
    })
    const dispatch = useDispatch()

    const handleButtonClick = () => dispatch({ type: 'ACTION_TEMPLATE'})
    
    return (
        <>
            <div>
                <a href="#profile">Profile</a>
                <a href="#project">Project</a>
                <a href="#storage">Storage</a>

                <button onClick={handleButtonClick}>
                    Counter
                </button>   
            </div>
            <Switch>
                <Route exact path="/profile">
                    <div>{`Profile Content ${count}`}</div>
                </Route>
                <Route exact path="/project">
                    <div>{`Project Content ${count}`}</div>
                </Route>
                <Route exact path="/storage">
                    <div>{`Storage Content ${count}`}</div>
                </Route>
            </Switch>
        </>
    );
}