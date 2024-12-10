import styles from './ActivityItem.module.css';
import { FaRegTrashCan } from "react-icons/fa6";
import { FaRegPenToSquare } from "react-icons/fa6";
import { format } from "date-fns";
import {deleteActivity} from "../../../services/activity.service";
import {useDispatch, useSelector} from "react-redux";
import {UserSelector} from "../../../reducers/user.slice.js";
import {removeActivity} from "../../../reducers/activities.slice.js";

const ActivityItem = ({ activity, onEdit }) => {
    const user = useSelector(UserSelector);
    const dispatch = useDispatch();
    const date = format(new Date(activity.dueDate), 'dd/MM/yyyy');

    const deleteHandler = async () => {
        const res = await deleteActivity(activity["_id"], user.accessToken);
        console.log(res, 'RESPONSE');
        if(res) {
            dispatch(removeActivity(activity["_id"]));
        }
    }

    return <div className={styles.todoItem}>
        <div className={styles.todoDate}>
            Data: {date}
        </div>
        <div className={styles.todoContent}>
            <div className={styles.todoInfo}>
                <div className={styles.todoTitle}>{activity.name}</div>
                <div>{activity.description}</div>
            </div>
            <div className={styles.buttons}>
                <button onClick={onEdit} title="Modifica"><FaRegPenToSquare /> </button>
                <button onClick={deleteHandler} title="Elimina"><FaRegTrashCan /></button>
            </div>
        </div>
    </div>
}

export default ActivityItem