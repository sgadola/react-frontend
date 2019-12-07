// List of ToDos component

import React, {Component} from "react";


export class ListTodosComponent extends Component {

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
