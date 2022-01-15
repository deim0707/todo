import React, {FC, useEffect} from "react";
import {ITodoItem} from "../../models";
import {TodoItem} from "./TodoItem";
import todoStore from "../../store/todo.store";

interface TodoProps {
    data: {
        todoList: ITodoItem[],
        totalCount: number
    },
    actions: {
        fetchTodoList: () => void;
        removeItem: (id: number) => void;
        changeTodoCompleted: (id: number) => void;
    }
}

export const TodoList: FC<TodoProps> = ({data, actions}) => {
    const {todoList, totalCount, } = data;
    const {fetchTodoList, removeItem, changeTodoCompleted} = actions;

    const fetch123 = () => fetchTodoList();
    useEffect(() => {
        // todoStore.fetchTodos();
        fetchTodoList();
        // fetch123()
    }, [])

    return (
        <div>
            <p>
                Total count: {totalCount}
            </p>
            <table>
                <tbody>
                {todoList.map(todoItem =>
                    <TodoItem
                        key={todoItem.id}
                        remove={removeItem}
                        changeTodoCompleted={changeTodoCompleted}
                        {...todoItem}
                    />
                )}
                </tbody>
            </table>

            <input type="text"/>
            <button>Добавить</button>
        </div>
    );
}