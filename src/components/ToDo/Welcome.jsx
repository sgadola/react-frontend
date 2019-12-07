// Welcome component

import React, {Component} from "react";
import {Link} from "react-router-dom";


export class WelcomeComponent extends Component {

    render() {
        return <div className="container">Welcome {this.props.match.params.name} to Todo App. You can manage your
            ToDos <Link
                to="/todos">here</Link>.</div>
    }
}
