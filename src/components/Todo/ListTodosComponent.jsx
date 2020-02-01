import React, {Component} from "react";
import moment from "moment";

import AuthenticationService from "./AuthenticationService";
import TodoDataService from "../../api/todo/TodoDataService";


export class ListTodosComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            todos: [
                {id: 1, description: 'Learn to dance', done: false, targetDate: new Date()},
                {id: 2, description: 'Become an expert at React', done: false, targetDate: new Date()},
                {id: 3, description: 'Visit India', done: false, targetDate: new Date()}
            ],
            message: null
        };

        this.deleteTodoClicked = this.deleteTodoClicked.bind(this);
        this.updateTodoClicked = this.updateTodoClicked.bind(this);
        this.addTodoClicked = this.addTodoClicked.bind(this);
        this.refreshTodos = this.refreshTodos.bind(this);
    }


    render() {
        console.log("ListTodosComponent.render()");

        return (
            <div>
                <h1>List Todos</h1>
                {this.state.message && <div className="alert alert-success">{this.state.message}</div>}
                <div className="container">
                    <table className="table">
                        <thead>
                        <tr>
                            <th>Description</th>
                            <th>Target Date</th>
                            <th>Is completed?</th>
                            <th>Update</th>
                            <th>Delete</th>
                        </tr>
                        </thead>
                        <tbody>
                        {this.state.todos.map(
                            todo =>
                                <tr key={todo.id}>
                                    <td>{todo.description}</td>
                                    <td>{moment(todo.targetDate).format("dddd, Do MMMM YYYY")}</td>
                                    {/*DD.MM.YYYY*/}
                                    <td>{todo.done.toString()}</td>
                                    <td>
                                        <button className="btn btn-success" onClick={() => this.updateTodoClicked(todo.id)}>Update</button>
                                    </td>
                                    <td>
                                        <button className="btn btn-warning" onClick={() => this.deleteTodoClicked(todo.id)}>Delete</button>
                                    </td>
                                </tr>
                        )}
                        </tbody>
                    </table>
                    <div className="row">
                        <button className="btn btn-success" onClick={this.addTodoClicked}>Add</button>
                    </div>
                </div>
            </div>
        );
    }


    componentDidMount() {
        console.log("ListTodosComponent.componentDidMount()");

        this.refreshTodos();
        console.log(this.state);
    }


    shouldComponentUpdate(nextProps, nextState, nextContext) {
        console.log("ListTodosComponent.shouldComponentUpdate()");

        console.log("nextProps:");
        console.log(nextProps);
        console.log("nextState:");
        console.log(nextState);

        return true;
    }


    // componentWillUnmount() {
    //     console.log("ListTodosComponent.componentWillUnmount()");
    // }


    refreshTodos() {
        console.log("refreshTodos");

        let username = AuthenticationService.getLoggedInUserName();

        TodoDataService.retrieveAllTodos(username).then(response => {
            console.log(response);

            this.setState({todos: response.data});
        })
    }


    deleteTodoClicked(id) {
        let username = AuthenticationService.getLoggedInUserName(id);

        TodoDataService.deleteTodo(username, id).then(() => {
            this.setState({message: `Delete of todo ${id} was successful.`});
            this.refreshTodos();
        });

        console.log(username);
    }


    addTodoClicked() {
        this.props.history.push("/todos/-1");
    }


    updateTodoClicked(id) {
        console.log("updated Todo with id " + id + "!");

        this.props.history.push(`/todos/${id}`);
    }
}
