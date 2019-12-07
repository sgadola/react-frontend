// Header and footer components

import React, {Component} from "react";
import {Link} from "react-router-dom";


export class HeaderComponent extends Component {

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


export class FooterComponent extends Component {

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
