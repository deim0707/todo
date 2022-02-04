import {Links} from "./links";
import {ITodoItem} from "../models";

class Todo {
    fetchTodos(): Promise<ITodoItem[]> {
        return fetch(Links.listTodos)
            .then(response => {
                console.log('res', response)
                return response.json();
            })
            .then(json => {
                return json.slice(0, 20);
            })
            .catch(error => error)
    }
}

export default new Todo();