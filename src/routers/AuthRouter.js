import React from 'react'
import { Link, Switch, Route, Redirect } from 'react-router-dom'
//screens
import {LoginScreen} from '../components/auth/LoginScreen';
import {RegisterScreen} from '../components/auth/RegisterScreen';

export const AuthRouter = () => {
    return (
        <div>
            <Switch>
                <Route path="/auth/login"  component={LoginScreen} />
                <Route exact path="/auth/register" component={RegisterScreen} />
            
            </Switch>
            
        </div>
    )
}
