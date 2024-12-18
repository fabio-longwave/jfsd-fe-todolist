import styles from './ActivityItem.module.css';
import {
    FaRegTrashCan,
    FaRegPenToSquare,
    FaBoxArchive,
    FaCheck,
    FaArrowLeft, FaRegEye
} from "react-icons/fa6";
import {format} from "date-fns";
import {config} from "../../../../config.js";
import {useNavigate} from "react-router";

const ActivityItem = ({activity, onEdit, onDelete, setStatus}) => {
    const date = format(new Date(activity.dueDate), 'dd/MM/yyyy');
    const navigate = useNavigate();

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
                <button onClick={() => navigate(`/activity/${activity['_id']}`, {state: {activity: activity}})} title="Vedi dettaglio"><FaRegEye/></button>
                {activity.status === 'completed' &&
                    <>
                        <button onClick={() => setStatus(activity['_id'], config.activityStatus.OPEN)}
                                title="Riapri attività"><FaArrowLeft/>
                        </button>
                        <button onClick={() => setStatus(activity['_id'], config.activityStatus.ARCHIVED)}
                                title="Archivia" style={{order: 2}}><FaBoxArchive/>
                        </button>
                    </>
                }
                {activity.status === 'open' &&
                    <>
                        <button onClick={() => setStatus(activity['_id'], config.activityStatus.COMPLETED)}
                                title="Elimina">
                            <FaCheck/></button>
                        <button onClick={() => onEdit(activity)} title="Modifica" style={{order: 1}}><FaRegPenToSquare/>
                        </button>
                    </>
                }
                <button onClick={() => onDelete(activity)} title="Elimina" style={{order: 3}}
                        className="delete__button"><FaRegTrashCan/></button>
            </div>
        </div>
    </div>
}

export default ActivityItem