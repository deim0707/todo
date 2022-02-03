import {ITodoItem} from "../models";

class Todo {
    addItem(oldCollection: ITodoItem[], newItem: ITodoItem): ITodoItem[] {
        return [...oldCollection, newItem]
    }

    removeItem(oldCollection: ITodoItem[], id: number): ITodoItem[] {
        return oldCollection.filter(todoItem => todoItem.id !== id)
    }

    markItemAsCompleted(oldCollection: ITodoItem[], id: number): ITodoItem[] {
        return oldCollection.map(todoItem => {
            if(todoItem.id === id) {
                return {...todoItem, completed: !todoItem.completed}
            } else return todoItem;
        })
    }

    getTotalTodo(collection: ITodoItem[]): number {
        return collection.length;
    }

}

export default new Todo();