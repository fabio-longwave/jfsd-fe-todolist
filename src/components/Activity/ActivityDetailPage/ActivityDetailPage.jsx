import styles from './ActivityDetailPage.module.css';
import {Link, useLocation} from "react-router";
import {format} from "date-fns";
import {config} from "../../../../config.js";

const ActivityDetailPage = () => {
    const {state} = useLocation()
    const {activity} = state

    return <div className={`${styles.detail__container} card`}>
        <div className={styles.info__element}><strong>Data:</strong> <span>{format(new Date(activity?.dueDate), 'dd/MM/yyyy')}</span></div>
        <div className={styles.info__element}><strong>Nome:</strong> <span>{activity?.name}</span></div>
        <div className={styles.info__element}><strong>Descrizione:</strong> <span>{activity?.description}</span></div>
        <div className={styles.info__element}><strong>Stato:</strong> <span>{config.activityStatus[activity?.status.toUpperCase()].label}</span></div>
        <Link to='/activity-list'>Torna alla lista</Link>
    </div>
}

export default ActivityDetailPage;