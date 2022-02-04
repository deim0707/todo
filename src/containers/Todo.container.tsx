import React from 'react';
import {observer} from "mobx-react-lite";
import todoStore from "../store/todo.store";
import {TodoList} from "../components/Todo/TodoList";
import ErrorBoundary from "../components/ErrorBoundary/ErrorBoundary";

const TodoContainer = observer(() => {
    const {todoList, fetchTodos, removeTodo, getTotalTodo, changeTodoCompleted, addTodo} = todoStore;

    return <ErrorBoundary>
        <TodoList
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