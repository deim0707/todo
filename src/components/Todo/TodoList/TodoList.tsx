import React, {FC, useEffect} from "react";
import {ITodoItem} from "../../../models";
import {TodoItem} from "../TodoItem/TodoItem";
import styles from './TodoList.module.scss';

interface TodoListProps {
    todoList: ITodoItem[],
    fetchTodos: () => void;
    removeTodo: (id: number) => void;
    changeTodoCompleted: (id: number) => void;
}


export const TodoList: FC<TodoListProps> = ({todoList, fetchTodos, removeTodo, changeTodoCompleted}) => {

    useEffect(() => {
        fetchTodos()
    }, [fetchTodos])

    return (
        <div className={styles.todoListWrapper}>
            {todoList.map(todoItem =>
                <TodoItem
                    key={todoItem.id}
                    remove={removeTodo}
                    changeTodoCompleted={changeTodoCompleted}
                    {...todoItem}
                />
            )}
        </div>
    );
}