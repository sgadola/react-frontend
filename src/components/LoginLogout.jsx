// Login component

import React, {Component} from "react";


export class LoginComponent extends Component {

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
                {this.state.hasLoginFailed && <div className="alert alert-warning">Invalid Credentials</div>}
                {this.state.showSuccessMessage && <div>Login sucessful</div>}
                <div>
                    <tbody>
                    <tr>
                        Username: <input name="username" type="text"
                                         value={this.state.username}
                                         onChange={this.HandleChange}
                                         placeholder="Please enter username" required/>
                    </tr>
                    <tr>
                        Password: <input name="password" type="password"
                                         value={this.state.password}
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


export class LogoutComponent extends Component {
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
