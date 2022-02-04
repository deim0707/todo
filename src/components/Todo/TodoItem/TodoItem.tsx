import React, {FC} from "react";
import {ITodoItem} from "../../../models";
import styles from './TodoItem.module.scss';

interface TodoItemProps extends ITodoItem {
    remove: (id: number) => void;
    changeTodoCompleted: (id: number) => void;
}

export const TodoItem: FC<TodoItemProps> = ({id, title, completed, remove, changeTodoCompleted}) => {
    const removeItem = () => remove(id);
    const changeCompleted = () => changeTodoCompleted(id);
    return (
        <div className={styles.TodoItemWrapper}>
            <div className={styles.title}>{title}</div>
            <div>=Lorem ipsum dolor sit amet, consectetur adipisicing elit. A asperiores aut autem beatae debitis, deserunt dicta dolorem eos eveniet facere fugiat, illo inventore laudantium maiores modi molestiae nam natus placeat porro praesentium provident quod sunt tenetur vel, veritatis! At commodi dolorum ducimus explicabo ipsa magnam nam nobis pariatur, quas, sapiente suscipit totam voluptatum. Aliquid amet blanditiis eaque eum labore totam!</div>
            <input className={styles.checkbox} type="checkbox" checked={completed} onChange={changeCompleted}/>
            <div className={styles.remove} onClick={removeItem}>X</div>
        </div>
    )
}