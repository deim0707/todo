import {makeAutoObservable} from "mobx";
import {ITodoItem} from "../models";

class Todo {
    constructor() {
        makeAutoObservable(this);
        // эта функция автоматом делает такие настройки: вручную их можно задать в makeObservable
        // makeAutoObservable(
        //     this,
        //     {
        //         todoList: observable, // указываем, что за изменения этого поля нужно следить
        //         addTodo: action, // указали, что функцию является экшеном
        //         computed // что-то про вычисляемые значения (почененные как get)
        //     }
        // );
    }

    todoList: ITodoItem[] = [];


    addTodo(todo: ITodoItem) {
        this.todoList.push(todo);
    }

    removeTodo(id: ITodoItem['id']) {
        this.todoList = this.todoList.filter(todoItem => todoItem.id !== id);
    }

    changeTodoCompleted(id: ITodoItem['id']) {
        this.todoList = this.todoList.map(todoItem => {
            if(todoItem.id === id) {
                return {...todoItem, completed: !todoItem.completed}
            } else return todoItem;
        })
    }

    // вычисляемые значения. функция будет вызываться Только тогда, когда задействованные в ней значения будут изменяться. оптимизация
    get getTotalTodo() {
        return this.todoList.length;
    }

    // ассинхронщина
    fetchTodos() {
        //todo ссылку вынести в константу в другой папке
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then(response => response.json())
            .then(json => {
                console.log('вызвали фетч');
                console.log('list',this.todoList)
                const newTodoList = json.slice(0, 20);
                // this.todoList = [...this.todoList, ...newTodoList]
                this.todoList = newTodoList
            })
    }

}

export default new Todo();