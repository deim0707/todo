import React, {FC, useEffect, useState} from "react";
import {ITodoItem} from "../../models";
import {TodoItem} from "./TodoItem";

interface TodoProps {
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

export const TodoList: FC<TodoProps> = ({data, actions}) => {
    const {todoList, totalCount, } = data;
    const {fetchTodos, removeTodo, changeTodoCompleted, addTodo} = actions;

    const [todoText, setTodoText] = useState<string>('');
    //todo сделать абстракцией?
    const addTodoToList = () => {
        const newId = todoList[todoList.length-1].id + 1;
        const newTodo: ITodoItem = {
            userId: 1,
            id: newId,
            title: todoText,
            completed: false
        }
        addTodo(newTodo);
        setTodoText('')
    }

    useEffect(()=> {
        fetchTodos()
    }, [fetchTodos])

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
                        remove={removeTodo}
                        changeTodoCompleted={changeTodoCompleted}
                        {...todoItem}
                    />
                )}
                </tbody>
            </table>

            <input type="text" value={todoText} onChange={(e)=> setTodoText(e.target.value)}/>
            <button onClick={addTodoToList}>Добавить</button>
        </div>
    );
}