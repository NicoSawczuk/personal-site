import React from 'react'
import { Route, Switch } from "wouter";
import Home from '../pages/Home'
import Projects from '../pages/Projects'

export default function Routes() {
    return (
        <>
            <Switch>
                <Route component={Home} path="/" />
                <Route component={Projects} path="/projects" />
            </Switch>
        </>
    )
}