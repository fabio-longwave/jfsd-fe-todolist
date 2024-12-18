import ActivityItem from "../ActivityItem/ActivityItem.jsx";
import {ActivitiesSelector, removeActivity, editActivity as changeActivity, setActivityStatus} from "../../../reducers/activities.slice.js";
import {useDispatch, useSelector} from "react-redux";
import {createPortal} from "react-dom";
import {FaRegTrashCan} from "react-icons/fa6";
import Modal from "../../Modal/Modal.jsx";
import {useEffect, useState} from "react";
import {changeActivityStatus, editActivity, deleteActivity} from "../../../services/activity.service.js";
import {UserSelector} from "../../../reducers/user.slice.js";
import AddEditActivity from "../AddEditActivity/AddEditActivity.jsx";

const ActivityList = ({activities}) => {
    const [deleteModalVisible, setDeleteModalVisible] = useState(false);
    const [editModalVisible, setEditModalVisible] = useState(false);
    const [selectedActivity, setSelectedActivity] = useState(null);
    const user = useSelector(UserSelector);
    const dispatch = useDispatch();

    const showDeleteDialog = (activity) => {
        setSelectedActivity(activity);
        setDeleteModalVisible(true);
    }

    const deleteHandler = async () => {
        const res = await deleteActivity(selectedActivity["_id"], user.accessToken);
        if (res) {
            dispatch(removeActivity(selectedActivity["_id"]));
        } else {
            console.log('error')
        }
        setDeleteModalVisible(false);
    }

    const changeStatusHandler = async (activityId, status) => {
        const res = await changeActivityStatus(activityId, status, user.accessToken);
        if (res) {
            dispatch(setActivityStatus({id: activityId, status: status}));
        }
    }

    const showEditDialog = (activity) => {
        setSelectedActivity(activity);
        setEditModalVisible(true);
    }

    const onSubmit = async (values) => {
        const res = await editActivity(selectedActivity["_id"], {
            status: selectedActivity.status,
            ...values
        }, user.accessToken);
        if(res) {
            dispatch(changeActivity({id: selectedActivity["_id"], activity: values}))
        }
        setEditModalVisible(false);
    }

    useEffect(() => {
        console.log(selectedActivity, 'ACTIVITY')

    }, [selectedActivity]);

    const deleteModal = selectedActivity &&
        <Modal isOpen={deleteModalVisible} onClose={() => setDeleteModalVisible(false)} header="Elimina attività">
            <div>Sei sicuro di voler eliminare l&#39;attività {selectedActivity.name}</div>
            <div className="modal__buttons">
                <button onClick={() => setDeleteModalVisible(false)} className="button">Annulla</button>
                <button onClick={deleteHandler} className="button delete__button"><FaRegTrashCan/>Elimina</button>
            </div>
        </Modal>

    const editModal = selectedActivity &&
        <Modal isOpen={editModalVisible} onClose={() => setEditModalVisible(false)} header="Modifica Attività">
            <AddEditActivity onSubmit={onSubmit} activity={selectedActivity}/>
            <div className="modal__buttons">
                <button type="submit" form="add-edit-todo">Salva attivit&agrave;</button>
            </div>
        </Modal>

    return <>
        <div>
        {activities.length > 0 ? activities.map(activity => (
                <ActivityItem key={activity["description"]} activity={activity} onEdit={showEditDialog}
                              onDelete={showDeleteDialog} setStatus={changeStatusHandler}/>
            )) : <div>Nessun elemento presente</div>}
        </div>
        {createPortal(deleteModal, document.body)}
        {createPortal(editModal, document.body)}
    </>
}

export default ActivityList;