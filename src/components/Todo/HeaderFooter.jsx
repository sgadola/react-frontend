import React, {Component} from "react";
import {Link, withRouter} from "react-router-dom";
import AuthenticationService from "./AuthenticationService";


class HeaderComponent extends Component {

    render() {
        const isUserLoggedIn = AuthenticationService.isUserLoggedIn();
        console.log("HeaderComponent.render().isUserLoggedIn: " + isUserLoggedIn);

        return (
            <header>
                <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                    <div>
                        <a className="navbar-brand" href="https://foo.bar">Foo Bar</a>
                    </div>
                    <ul className="navbar-nav">
                        {isUserLoggedIn &&
                        <li>
                            <Link className="nav-link" to="/welcome/Simon">Home</Link>
                        </li>}
                        {isUserLoggedIn &&
                        <li>
                            <Link className="nav-link" to="/todos">Todos</Link>
                        </li>}
                    </ul>
                    <ul className="navbar-nav navbar-collapse justify-content-end">
                        {!isUserLoggedIn &&
                        <li>
                            <Link className="nav-link" to="/login">Login</Link>
                        </li>}
                        {isUserLoggedIn &&
                        <li>
                            <Link className="nav-link"
                                  to="/logout"
                                  onClick={AuthenticationService.logout}>Logout</Link>
                        </li>}
                    </ul>
                </nav>
            </header>
        )
    }
}


export class FooterComponent extends Component {

    render() {
        return (
            <div>
                <footer className="footer">
                    <span className="text-muted">©
                        2019
                        Copyright:&nbsp;
                        <a href="https://foo.bar">foo.bar</a>
                    </span>
                </footer>
            </div>
        )
    }
}


export default withRouter(HeaderComponent);

/// export.. default??
