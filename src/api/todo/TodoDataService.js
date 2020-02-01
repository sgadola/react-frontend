import axios from "axios";

// import {API_URL} from "../../constants";
import {JPA_API_URL} from "../../constants";


class TodoDataService {

    retrieveAllTodos(name) {
        console.log("TodoDataService.retrieveAllTodos()");

        // return axios.get(`http://localhost:8080/users/${name}/todos`);
        return axios.get(`${JPA_API_URL}/users/${name}/todos`);
    }


    retrieveTodo(name, id) {
        console.log("TodoDataService.retrieveTodo()");

        // return axios.get(`http://localhost:8080/users/${name}/todos/${id}`);
        return axios.get(`${JPA_API_URL}/users/${name}/todos/${id}`);
    }


    deleteTodo(name, id) {
        console.log("TodoDataService.deleteTodo()");

        // return axios.delete(`http://localhost:8080/users/${name}/todos/${id}`);
        return axios.delete(`${JPA_API_URL}/users/${name}/todos/${id}`);
    }


    updateTodo(name, id, todo) {
        console.log("TodoDataService.updateTodo()");

        // return axios.put(`http://localhost:8080/users/${name}/todos/${id}`, todo);
        return axios.put(`${JPA_API_URL}/users/${name}/todos/${id}`, todo);
    }


    createTodo(name, todo) {
        console.log("TodoDataService.createTodo()");

        // return axios.put(`http://localhost:8080/users/${name}/todos`, todo);
        return axios.put(`${JPA_API_URL}/users/${name}/todos`, todo);
    }
}

export default new TodoDataService();
