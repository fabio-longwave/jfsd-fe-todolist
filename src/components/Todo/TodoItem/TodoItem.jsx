import styles from './TodoItem.module.css';
import { FaRegTrashCan } from "react-icons/fa6";
import { FaRegPenToSquare } from "react-icons/fa6";

const TodoItem = ({ todo, onEdit, onDelete }) => {

    return <div className={styles.todoItem}>
        <div className={styles.todoDate}>
            Data: {todo.dueDate}
        </div>
        <div className={styles.todoContent}>
            <div className={styles.todoInfo}>
                <div className={styles.todoTitle}>{todo.name}</div>
                <div>{todo.description}</div>
            </div>
            <div className={styles.buttons}>
                <button onClick={onEdit} title="Modifica"><FaRegPenToSquare /> </button>
                <button onClick={onDelete} title="Elimina"><FaRegTrashCan /></button>
            </div>
        </div>
    </div>
}

export default TodoItem