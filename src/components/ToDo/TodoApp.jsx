// Main ToDo app component

import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import {LoginComponent, LogoutComponent} from '../LoginLogout';
import {HeaderComponent, FooterComponent} from './HeaderFooter';
import {WelcomeComponent} from './Welcome';
import {ListTodosComponent} from './ListToDos';


export default class TodoApp extends Component {

    render() {
        return (
            <div className="TodoApp">
                <h2>My ToDo App</h2>
                <br/>
                <Router>
                    <HeaderComponent/>
                    <Switch>
                        <Route path="/" exact component={LoginComponent}/>
                        <Route path="/login" component={LoginComponent}/>
                        <Route path="/logout" component={LogoutComponent}/>
                        <Route path="/welcome/:name" component={WelcomeComponent}/>
                        <Route path="/todos" component={ListTodosComponent}/>
                        <Route component={ErrorComponent}/>
                    </Switch>
                    <FooterComponent/>
                </Router>
            </div>
        );
    }
}


function ErrorComponent() {
    return <div><strong>ERROR</strong></div>
}
