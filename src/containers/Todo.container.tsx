import React from 'react';
import {observer} from "mobx-react-lite";
import todoStore from "../store/todo.store";
import {TodoList} from "../components/Todo/TodoList";

const TodoContainer = observer(() => {
    const {todoList, fetchTodos, removeTodo, getTotalTodo, changeTodoCompleted} = todoStore;

    const fetch123 = () => todoStore.fetchTodos();

    const data = {
        todoList,
        totalCount: getTotalTodo
    }

    const actions = {
        fetchTodoList: todoStore.fetchTodos,
        removeItem: removeTodo,
        changeTodoCompleted,
    }

    return <TodoList
        data={data}
        actions={actions}
    />;
});

export default TodoContainer;