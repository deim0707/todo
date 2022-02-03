import {Links} from "./links";
import {ITodoItem} from "../models";

class Todo {
     fetchTodos(): Promise<ITodoItem[]> {
        return fetch(Links.listTodos)
            .then(response => response.json())
            .then(json => {
                return json.slice(0, 20);
            })
    }
}

export default new Todo();