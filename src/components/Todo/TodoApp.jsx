import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import {LoginComponent, LogoutComponent} from '../LoginLogout';
import ErrorComponent from '../ErrorComponent';

import HeaderComponent, {FooterComponent} from './HeaderFooter';
import {WelcomeComponent} from './WelcomeComponent';
import AuthenticatedRoute from "./AuthenticatedRoute";
import {ListTodosComponent} from './ListTodosComponent';
import TodoComponent from "./TodoComponent";


export default class TodoApp extends Component {

    render() {
        return (
            <div className="TodoApp">
                <Router>
                    <HeaderComponent/>
                    <Switch>
                        <Route path="/" exact component={LoginComponent}/>
                        <Route path="/login" exact component={LoginComponent}/>
                        <AuthenticatedRoute path="/logout" component={LogoutComponent}/>
                        <AuthenticatedRoute path="/welcome/:name" component={WelcomeComponent}/>

                        <AuthenticatedRoute path="/todos/:id" component={TodoComponent}/>
                        <AuthenticatedRoute path="/todos" component={ListTodosComponent}/>

                        <Route component={ErrorComponent}/>
                    </Switch>
                    <FooterComponent/>
                </Router>
            </div>
        );
    }
}
