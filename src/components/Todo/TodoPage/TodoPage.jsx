import TodoList from "../TodoList/TodoList.jsx";
import styles from "./TodoPage.module.css";
import {useState} from "react";
import Modal from "../../Modal/Modal.jsx";
import AddEditTodo from "../AddEditTodo/AddEditTodo.jsx";
const TodoPage = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    return (
        <>
            <div className={styles.listHeader}>
                <button onClick={() => setIsModalOpen(true)}>Aggiungi Elemento</button>
            </div>
            <TodoList />
            <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} header="Aggiungi Elemento">
                <AddEditTodo />
            </Modal>
        </>
    )
}

export default TodoPage