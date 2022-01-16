import React from 'react';
import {observer} from "mobx-react-lite";
import todoStore from "../store/todo.store";
import {TodoList} from "../components/Todo/TodoList";

const TodoContainer = observer(() => {
    const {todoList, fetchTodos, removeTodo, getTotalTodo, changeTodoCompleted, addTodo} = todoStore;

    return <TodoList
        data={{
            todoList,
            totalCount: getTotalTodo
        }}
        actions={{
            fetchTodos,
            removeTodo,
            changeTodoCompleted,
            addTodo,
        }}
    />;
});

export default TodoContainer;