import React, {FC} from 'react';
import {AddingTodoItem} from "./AddingTodoItem/AddingTodoItem";
import {TodoList} from "./TodoList/TodoList";
import {ITodoItem} from "../../models";
import {TodoFooter} from "./TodoFooter/TodoFooter";

interface TodoWrapperProps {
    data: {
        todoList: ITodoItem[],
        totalCount: number
    },
    actions: {
        fetchTodos: () => void;
        removeTodo: (id: number) => void;
        changeTodoCompleted: (id: number) => void;
        addTodo: (todoItem: ITodoItem) => void;
    }
}

export const TodoWrapper: FC<TodoWrapperProps> = ({data, actions}) => {
    const {todoList, totalCount,} = data;
    const {fetchTodos, removeTodo, changeTodoCompleted, addTodo} = actions;


    return (
        <div>
            <AddingTodoItem todoList={todoList} addTodo={addTodo}/>
            <TodoList todoList={todoList} fetchTodos={fetchTodos} removeTodo={removeTodo} changeTodoCompleted={changeTodoCompleted}/>
            <TodoFooter totalCount={totalCount}/>
        </div>
    );
};