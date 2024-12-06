import TodoList from "../TodoList/TodoList.jsx";
import styles from "./TodoPage.module.css";
import {useEffect, useState} from "react";
import Modal from "../../Modal/Modal.jsx";
import AddEditTodo from "../AddEditTodo/AddEditTodo.jsx";
import {useDispatch, useSelector} from "react-redux";
import {addTodo, setTodoList} from "../../../reducers/todolist.slice.js";
import {addActivity, getAllActivities} from "../../../services/activity.service.js";
import {UserSelector} from "../../../reducers/user.slice.js";

const TodoPage = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const dispatch = useDispatch();
    const user = useSelector(UserSelector);

    const loadActivities = async () => {
        const activities = await getAllActivities(user.accessToken);
        if(activities && activities.length > 0){
            dispatch(setTodoList(activities));
        }
    }

    useEffect( () => {
        loadActivities().catch(e => console.log(e));
    }, []);

    const onSubmit = async (values) => {
        console.log(values);
        const newActivity = await addActivity(values, user.accessToken).catch(e => console.log(e));
        if(newActivity) {
            dispatch(addTodo(values));
            setIsModalOpen(false);
        }
    }
    return (
        <>
            <div className={styles.listHeader}>
                <button onClick={() => setIsModalOpen(true)}>Aggiungi Elemento</button>
            </div>
            <TodoList />
            <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} header="Aggiungi Elemento">
                <AddEditTodo onSubmit={onSubmit}/>
                <div>
                    <button type="submit" form="add-edit-todo">Aggiungi alla lista</button>
                </div>
            </Modal>
        </>
    )
}

export default TodoPage