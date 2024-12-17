import ActivityList from "../ActivityList/ActivityList.jsx";
import styles from "./ActivitiesPage.module.css";
import {useEffect, useState} from "react";
import Modal from "../../Modal/Modal.jsx";
import AddEditActivity from "../AddEditActivity/AddEditActivity.jsx";
import {useDispatch, useSelector} from "react-redux";
import {ActivitiesSelector, addActivity as addNewActivity, setActivities} from "../../../reducers/activities.slice.js";
import {addActivity, getAllActivities} from "../../../services/activity.service.js";
import {UserSelector} from "../../../reducers/user.slice.js";
import {createPortal} from "react-dom";
import {Tabs, TabPanel} from "../../Tabs/Tabs.jsx";
import {config} from "../../../../config.js";

const ActivitiesPage = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const dispatch = useDispatch();
    const user = useSelector(UserSelector);
    const activities = useSelector(ActivitiesSelector);

    const loadActivities = async () => {
        let activities = await getAllActivities(user.accessToken);
        if (activities && activities.length > 0) {
            dispatch(setActivities(activities));
        }
    }

    const filterActivitiesByStatus = (status) => {
        return activities.filter(activity => activity.status === status)
    }

    useEffect(() => {
        loadActivities().catch(e => console.log(e));
    }, []);


    const onSubmit = async (values) => {
        const newActivity = await addActivity(values, user.accessToken).catch(e => console.log(e));
        if (newActivity) {
            dispatch(addNewActivity(newActivity));
            setIsModalOpen(false);
        }
    }

    const addActivityModal = (
        <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} header="Crea Attività">
            <AddEditActivity onSubmit={onSubmit}/>
            <div className="modal__buttons">
                <button type="submit" form="add-edit-todo">Salva attivit&agrave;</button>
            </div>
        </Modal>
    );

    return (
        <>
            <div className={styles.listHeader}>
                <button onClick={() => setIsModalOpen(true)}>Aggiungi Elemento</button>
            </div>
            <Tabs>
                {Object.values(config.activityStatus).map((value) => {
                        return <TabPanel key={value.value} header={value.label}>
                            <ActivityList activities={filterActivitiesByStatus(value.value)}/>
                        </TabPanel>
                })}
            </Tabs>
            {createPortal(addActivityModal, document.body)}
        </>
    )
}

export default ActivitiesPage