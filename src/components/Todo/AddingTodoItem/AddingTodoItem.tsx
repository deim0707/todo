import React, {FC, useState} from 'react';
import {ITodoItem} from "../../../models";

interface AddingTodoItemProps {
    todoList: ITodoItem[],
    addTodo: (todoItem: ITodoItem) => void;
}

export const AddingTodoItem: FC<AddingTodoItemProps> = ({todoList, addTodo}) => {
    const [todoText, setTodoText] = useState<string>('');


    const addTodoToList = () => {
        const newId = todoList[todoList.length - 1].id + 1;
        const newTodo: ITodoItem = {
            userId: 1, //todo получать из стора, где будет инфа про пользователя
            id: newId,
            title: todoText,
            completed: false
        }
        addTodo(newTodo);
        setTodoText('')
    }
    return (
        <div>
            <input type="text" value={todoText} onChange={(e) => setTodoText(e.target.value)}/>
            <button onClick={addTodoToList}>Добавить</button>
        </div>
    );
};
