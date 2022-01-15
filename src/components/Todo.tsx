import React, {FC, useEffect} from 'react';
import {observer} from "mobx-react-lite";
import todo from "./../store/todo.store";
import {ITodoItem as ITodoItem} from "../models";

const TodoItem: FC<ITodoItem> = ({id, title, completed}) => {
    return (
        <tr>
            <td>{id}</td>
            <td>{title}</td>
            <td>
                <input type="checkbox" checked={completed}
                       onChange={() => todo.changeTodoCompleted(id)}/>
            </td>
            <td onClick={() => todo.removeTodo(id)}>X</td>
        </tr>
    )
}

const Todo = observer(() => {
    useEffect(()=>{
        todo.fetchTodos();
    },[])

    return (
        <div>
            <p>
                Total count: {todo.getTotalTodo}
            </p>
            <table>
                <tbody>
                {todo.todoList.map(todoItem => <TodoItem key={todoItem.id} {...todoItem}/>)}
                </tbody>
            </table>

            <input type="text"/>
            <button>Добавить</button>
        </div>
    );
});

export default Todo;