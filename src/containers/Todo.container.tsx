import React from 'react';
import {observer} from "mobx-react-lite";
import todoStore from "../store/todo.store";
import {ErrorBoundary} from "./ErrorBoundary/ErrorBoundary";
import {TodoWrapper} from "../components/Todo/TodoWrapper";

const TodoContainer = observer(() => {
    const {todoList, fetchTodos, removeTodo, getTotalTodo, changeTodoCompleted, addTodo} = todoStore;

    return <ErrorBoundary>
        <TodoWrapper
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
        />
    </ErrorBoundary>;
});

export default TodoContainer;