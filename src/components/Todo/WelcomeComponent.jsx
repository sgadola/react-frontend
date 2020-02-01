import React, {Component} from "react";
import {Link} from "react-router-dom";

import HelloWorldService from "../../api/todo/HelloWorldService";


export class WelcomeComponent extends Component {

    constructor(props) {
        super(props);

        this.state = {
            welcomeMessage: ''
        };

        this.retrieveWelcomeMessage = this.retrieveWelcomeMessage.bind(this);
        this.handleSuccessfulResponse = this.handleSuccessfulResponse.bind(this);
        // this.handleError = this.handleError.bind(this)
    }


    render() {
        return (
            <div>
                <div className="container">
                    Welcome {this.props.match.params.name} to the Todo App. You can manage your Todos <Link to="/todos">here</Link>.
                </div>
                <div className="container">
                    Click here to get a customized welcome message.<br/>
                    <button className="btn btn-success" onClick={this.retrieveWelcomeMessage}>Get Welcome Message</button>
                </div>

                <div className="container">
                    {this.state.welcomeMessage}
                </div>
            </div>
        )
    }


    retrieveWelcomeMessage() {
        console.log("WelcomeComponent.retrieveWelcomeMessage()");

        HelloWorldService.executeHelloWorldPathService(this.props.match.params.name)
            .then(response => this.handleSuccessfulResponse(response));
    }


    handleSuccessfulResponse(response) {
        this.setState(
            {
                welcomeMessage: response.data.message
            }
        );
    }


    handleError(error) {
        console.log(error.response);

        let errorMessage = "";
        if (error.message)
            errorMessage += error.message;

        if (error.message && error.response.data)
            errorMessage += error.response.data.message;

        this.setState({
            welcomeMessage: errorMessage
        });
    }
}
