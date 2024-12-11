import ActivityItem from "../ActivityItem/ActivityItem.jsx";
import {ActivitiesSelector, removeActivity, setActivityStatus} from "../../../reducers/activities.slice.js";
import {useDispatch, useSelector} from "react-redux";
import {createPortal} from "react-dom";
import {FaRegTrashCan} from "react-icons/fa6";
import Modal from "../../Modal/Modal.jsx";
import {useState} from "react";
import {changeActivityStatus, deleteActivity} from "../../../services/activity.service.js";
import {UserSelector} from "../../../reducers/user.slice.js";

const ActivityList = () => {
    const activities = useSelector(ActivitiesSelector);
    const [deleteModalVisible, setDeleteModalVisible] = useState(false);
    const [selectedActivity, setSelectedActivity] = useState(null);
    const user = useSelector(UserSelector);
    const dispatch = useDispatch();

    const showDeleteDialog = (activity) => {
        setSelectedActivity(activity);
        setDeleteModalVisible(true);
    }

    const deleteHandler = async () => {
        const res = await deleteActivity(selectedActivity["_id"], user.accessToken);
        if(res) {
            dispatch(removeActivity(selectedActivity["_id"]));
        }
        setDeleteModalVisible(false);
    }

    const changeStatusHandler = async (activityId, status) => {
        const res = await changeActivityStatus(activityId, status, user.accessToken);
        if(res) {
            dispatch(setActivityStatus({id: activityId, status: status}));
        }
    }

    const deleteModal = selectedActivity && <Modal isOpen={deleteModalVisible} onClose={() => setDeleteModalVisible(false)} header="Elimina attività">
        <div>Sei sicuro di voler eliminare l&#39;attività {selectedActivity.name}</div>
        <div className="modal__buttons">
            <button onClick={() => setDeleteModalVisible(false)} className="button">Annulla</button>
            <button onClick={deleteHandler} className="button delete__button"><FaRegTrashCan />Elimina</button>
        </div>
    </Modal>
    return <>
        <div className="card">
            {activities.length > 0 ? activities.map(activity => (
                <ActivityItem key={activity["description"]} activity={activity} onEdit={() => null} onDelete={showDeleteDialog} setStatus={changeStatusHandler}/>
            )): <div>Nessun elemento presente</div>}
        </div>
        {createPortal(deleteModal, document.body)}
    </>
}

export default ActivityList;