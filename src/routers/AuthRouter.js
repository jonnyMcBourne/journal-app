import React from 'react'
import { Link, Switch, Route, Redirect } from 'react-router-dom'
//screens
import {LoginScreen} from '../components/auth/LoginScreen';
import {RegisterScreen} from '../components/auth/RegisterScreen';

export const AuthRouter = () => {
    return (
        <div className="auth__main" >
            <Switch>
             <div className="auth__box-container" >
                <Route path="/auth/login"  component={LoginScreen} />
                <Route exact path="/auth/register" component={RegisterScreen} />
             </div>
            </Switch>
            
        </div>
    )
}
