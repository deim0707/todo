import React, {FC} from "react";
import {ITodoItem} from "../../models";

interface TodoItemProps extends ITodoItem{
    remove: (id: number) => void;
    changeTodoCompleted: (id: number) => void;
}

export const TodoItem: FC<TodoItemProps> = ({id, title, completed, remove, changeTodoCompleted}) => {
    const removeItem = () => remove(id);
    const changeCompleted = () => changeTodoCompleted(id);
    return (
        <tr>
            <td>{id}</td>
            <td>{title}</td>
            <td>
                <input type="checkbox" checked={completed} onChange={changeCompleted}/>
            </td>
            <td onClick={removeItem}>X</td>
        </tr>
    )
}