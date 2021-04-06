import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
  } from "react-router-dom";

export default function Dashboard() {
    return (
        <Router>
            <Switch>
                <Route exact path='/dashboard'>
                    <div>hello from exact dashboard</div>
                </Route>
                <Route exact path='/dashboard/productUpload'>
                    <div>hello from upload productUpload</div>
                </Route>
            </Switch>
        </Router>
    )
}
