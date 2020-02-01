import React, {Component} from "react";
import moment from "moment";
import {ErrorMessage, Field, Form, Formik} from "formik";

import TodoDataService from "../../api/todo/TodoDataService";
import AuthenticationService from "./AuthenticationService";


export default class TodoComponent extends Component {

    constructor(props) {
        super(props);

        this.state = {
            id: this.props.match.params.id,
            description: "",
            targetDate: moment(new Date()).format("DD.MM.YYYY")
        };

        this.onSubmit = this.onSubmit.bind(this);
        this.validate = this.validate.bind(this);
    }


    componentDidMount() {
        if (this.state.id === -1)
            return;

        let username = AuthenticationService.getLoggedInUserName();
        TodoDataService.retrieveTodo(username, this.state.id)
            .then(response => this.setState({
                description: response.data.description,
                targetData: moment(response.data.targetDate).format("DD.MM.YYYY")
            }));
    }


    onSubmit(values) {
        console.log(values);

        let username = AuthenticationService.getLoggedInUserName();

        let todo = {
            id: this.state.id,
            description: values.description,
            targetDate: values.targetDate
        };

        if (this.state.id === -1)
            TodoDataService.createTodo(username, todo)
                .then(() => this.props.history.push("/todos"));
        else
            TodoDataService.updateTodo(username, this.state.id, todo)
                .then(() => this.props.history.push("/todos"));
    }


    validate(values) {
        console.log(values);

        let errors = {};

        if (!values.description)
            errors.description = "Enter a description";
        else if (values.description.length < 5)
            errors.description = "Enter at least 5 characters in Description";

        if (!moment(values.targetDate).isValid())
            errors.targetDate = "Enter a valid Target Date";

        return errors;
    }


    render() {
        // let description = this.state.description;
        // let targetDate = this.state.targetDate;

        let {description, targetDate} = this.state;

        // console.log("TargetDate: " + targetDate);

        return (
            <div>
                <h1>Todo</h1>
                <div className="container">
                    <Formik initialValues={{
                        description,
                        targetDate
                    }}
                            onSubmit={this.onSubmit}
                            validateOnChange={false}
                            validateOnBlur={false}
                            validate={this.validate}
                            enableReinitialize={true}>
                        {
                            (props) => (
                                <Form>
                                    {console.log("TargetDate: " + targetDate)}
                                    <ErrorMessage className="alert alert-warning" name="description" component="div"/>
                                    <ErrorMessage className="alert alert-warning" name="targetDate" component="div"/>
                                    <fieldset className="form-group">
                                        <label>Description</label>
                                        <Field className="form-control" type="text" name="description"/>
                                    </fieldset>
                                    <fieldset className="form-group">
                                        <label>Target Date</label>
                                        <Field className="form-control" type="date" name="targetDate"/>
                                    </fieldset>
                                    <button className="btn btn-success" type="submit">Save</button>
                                </Form>
                            )
                        }
                    </Formik>
                </div>
                <div> Todo Component for id - {this.props.match.params.id}</div>
            </div>
        );
    }
}
