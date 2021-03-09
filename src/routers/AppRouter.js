import React from 'react'
import { BrowserRouter as Router, Link, Switch, Route, Redirect } from 'react-router-dom'

//AuthRouter
import {AuthRouter} from './AuthRouter'

//containers
import {JournalScreen} from '../components/journal/JournalScreen'

export const AppRouter = () => {
    return (
        <div>
            <Router>
                <div>
                    <Switch>
                        <Route exact path="/" component={JournalScreen} />
                        <Route path="/auth" component={AuthRouter} />
                        <Redirect to="/auth/login" />
                    </Switch>
                </div>
            </Router>
        </div>
    )
}
