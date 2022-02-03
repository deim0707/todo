import {action, computed, makeObservable, observable} from "mobx";
import {ITodoItem} from "../models";
import TodoLogic from "../logic/todo.logic";
import TodoService from "../services/todo.service";

class Todo {
    constructor() {
        makeObservable(
            this,
            {
                todoList: observable, // указываем, что за изменения этого поля нужно следить
                addTodo: action.bound, // указали, что функцию является экшеном
                removeTodo: action.bound,
                changeTodoCompleted: action.bound,
                fetchTodos: action.bound,
                getTotalTodo: computed // что-то про вычисляемые значения (почененные как get)
            }
        );
    }

    todoList: ITodoItem[] = [];


    addTodo(todo: ITodoItem) {
        this.todoList = TodoLogic.addItem(this.todoList, todo);
    }

    removeTodo(id: ITodoItem['id']) {
        this.todoList = TodoLogic.removeItem(this.todoList, id);
    }

    changeTodoCompleted(id: ITodoItem['id']) {
        this.todoList = TodoLogic.markItemAsCompleted(this.todoList, id);
    }

    get getTotalTodo() {
        return TodoLogic.getTotalTodo(this.todoList);
    }

    async fetchTodos() {
        this.todoList = await TodoService.fetchTodos();
    }

}

export default new Todo();