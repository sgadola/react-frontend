import React, {Component} from "react";
import AuthenticationService from "./Todo/AuthenticationService";


export class LoginComponent extends Component {

    constructor(props) {
        super(props);

        this.state = {
            username: '',
            password: '',
            hasLoginFailed: false,
            showSuccessMessage: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.loginClicked = this.loginClicked.bind(this);
        this.keyPressed = this.keyPressed.bind(this);
    }


    render() {
        return (
            <div>
                <h1>Login</h1>
                <div className="container">
                    {this.state.hasLoginFailed && <div className="alert alert-warning">Invalid credentials</div>}
                    {this.state.showSuccessMessage && <div>Login sucessful</div>}
                    <table className="table">
                        <tbody>
                        <tr>
                            <td>
                                Username: <input name="username"
                                                 type="text"
                                                 value={this.state.username}
                                                 onChange={this.handleChange}
                                                 onKeyPress={this.keyPressed}
                                                 placeholder="Please enter username"
                                                 required/>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Password: <input name="password"
                                                 type="password"
                                                 value={this.state.password}
                                                 onChange={this.handleChange}
                                                 onKeyPress={this.keyPressed}
                                                 placeholder="Please enter password"
                                                 required/>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <button className="btn btn-success" type="submit" onClick={this.loginClicked}>Login</button>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }


    // EnterKey-Login handler
    keyPressed(event) {
        if (event.key === "Enter")
            this.loginClicked();
    }


    handleChange(event) {
        // console.log(this.state);

        this.setState({
            [event.target.name]: event.target.value
        });
    }


    /*    loginClicked() {
            // console.log(this.state);
            // alert("It's \"game\" time.");

            if (this.state.username === 'user' && this.state.password === '123') {
                // console.log("Login successful");

                AuthenticationService.registerSuccessfulLogin(this.state.username, this.state.password);

                this.props.history.push(`/welcome/${this.state.username}`);

                // this.setState({hasLoginFailed: false});
                // this.setState({showSuccessMessage: true})
            } else {
                // console.log("Login failed");

                this.setState({hasLoginFailed: true});
                this.setState({showSuccessMessage: false})
            }
        }*/


    loginClicked() {
        // console.log(this.state);
        // alert("It's \"game\" time.");

        AuthenticationService
            .executeJwtAuthenticationService(this.state.username, this.state.password)
            .then((response) => {
                AuthenticationService.registerSuccessfulLoginForJwt(this.state.username, response.data.token)
                this.props.history.push(`/welcome/${this.state.username}`)
            })
            .catch(() => {
                this.setState({showSuccessMessage: false})
                this.setState({hasLoginFailed: true})
            })
    }
}


export class LogoutComponent extends Component {
    render() {
        return (
            <div>
                <h1>You are logged out</h1>
                <div className="container">
                    Thank you for using our Application
                </div>
            </div>
        )
    }
}
