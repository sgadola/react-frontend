import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';

// import './Counter.css'


class TodoApp extends Component {
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
                {/* <LoginComponent />
                <WelcomeComponent /> */}
            </div>
        );
    }
}


// Login-component
class LoginComponent extends Component {

    constructor(props) {
        super(props);

        this.state = {
            username: 'default_user',
            password: '',
            hasLoginFailed: false,
            showSuccessMessage: false
        };

        this.HandleChange = this.HandleChange.bind(this);
        this.LoginClicked = this.LoginClicked.bind(this);
    }


    render() {
        return (
            <div className="LoginComponent container">
                <h2>Login Component</h2>
                {/*                 <ShowInvalidCredentials hasLoginFailed={this.state.hasLoginFailed} />
                <ShowLoginSuccessMessage showSuccessMessage={this.state.showSuccessMessage} />
                <hr/> */}
                {this.state.hasLoginFailed && <div className="alert alert-warning">Invalid Credentials</div>}
                {this.state.showSuccessMessage && <div>Login sucessful</div>}
                <div>
                    <tbody>
                    <tr>
                        Username: <input name="username" type="text"
                                         value={this.state.username}
                        // onChange={this.handleUsernameChange}
                                         onChange={this.HandleChange}
                                         placeholder="Please enter username" required/>
                    </tr>
                    <tr>
                        Password: <input name="password" type="password"
                                         value={this.state.password}
                        // onChange={this.handlePasswordChange}
                                         onChange={this.HandleChange}
                                         placeholder="Please enter password" required/>
                    </tr>
                    <tr>
                        <button type="submit" onClick={this.LoginClicked}>Login</button>
                    </tr>
                    </tbody>
                </div>
            </div>
        );
    }


    HandleChange(event) {
        console.log(this.state);

        this.setState({
            [event.target.name]: event.target.value
        })
    }


    LoginClicked() {
        if (this.state.username === 'user' && this.state.password === '123') {
            console.log("Login succsessful");

            this.props.history.push(`/welcome/${this.state.username}`);

            this.setState({hasLoginFailed: false});
            this.setState({showSuccessMessage: true})
        } else {
            console.log("Login failed");

            this.setState({hasLoginFailed: true});
            this.setState({showSuccessMessage: false})
        }
    }
}


class LogoutComponent extends Component {
    render() {
        return (<div>
                <h1>You are logged out</h1>
                <div className="container">
                    Thank you for using our Application
                </div>
            </div>
        )
    }
}


/* function ShowInvalidCredentials(props) {
    if (props.hasLoginFailed) {
        console.log("hasLoginFailed")
        return <div>Invalid Credentials</div>
    }

    return null
}


function ShowLoginSuccessMessage(props) {
    if (props.showSuccessMessage) {
        console.log("Good")
        return <div>Login successful</div>
    }

    return null
} */


// Welcome component
class WelcomeComponent extends Component {
    render() {
        return <div className="container">Welcome {this.props.match.params.name} to Todo App. You can manage your
            ToDos <Link
                to="/todos">here</Link>.</div>
    }
}


function ErrorComponent() {
    return <div><strong>ERROR</strong></div>
}

class ListTodosComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todo: [
                {id: 1, description: 'Learn to dance', done: false, targetDate: new Date()},
                {id: 2, description: 'Become an expert at React', done: false, targetDate: new Date()},
                {id: 3, description: 'Visit India', done: false, targetDate: new Date()}
            ]
        }
    }

    render() {
        return (<div>
                <h1>List Todos</h1>
                <br/>
                <div className="container">
                    <table className="table">
                        <thead>
                        <tr>
                            <th>id</th>
                            <th>Description</th>
                            <th>Target Date</th>
                            <th>Is completed?</th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            this.state.todo.map(
                                todo =>
                                    <tr>
                                        <td>{todo.id}</td>
                                        <td>{todo.description}</td>
                                        <td>{todo.targetDate.toDateString()}</td>
                                        <td>{todo.done.toString()}</td>
                                    </tr>
                            )
                        }
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}


class HeaderComponent extends Component {
    render() {
        return (
            <header>
                <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                    <div className="navbar-brand"><a href="http://www.in28minutes.com">in28Minutes</a></div>
                    <ul className="navbar-nav">
                        <li className="nav-link"><Link to="/welcome/Simon">Home</Link></li>
                        <li className="nav-link"><Link to="/todos">ToDos</Link></li>
                    </ul>
                    <ul className="navbar-nav navbar-collapse justify-content-end">
                        <li className="nav-link"><Link to="/login">Login</Link></li>
                        <li className="nav-link"><Link to="/logout">Logout</Link></li>
                    </ul>
                </nav>
            </header>
        )
    }
}


class FooterComponent extends Component {
    render() {
        return (
            <div>
                <footer className="footer bg-dark text-white-50">
                    <div className="footer-copyright text-center py-3">© 2019 Copyright:&nbsp;
                        <a href="https://foo.bar">foo.bar</a>
                    </div>
                </footer>
            </div>
        )
    }
}


export default TodoApp;