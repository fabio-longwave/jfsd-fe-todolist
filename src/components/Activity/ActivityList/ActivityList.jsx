import ActivityItem from "../ActivityItem/ActivityItem.jsx";
import {ActivitiesSelector} from "../../../reducers/activities.slice.js";
import {useSelector} from "react-redux";

const ActivityList = () => {
    const activities = useSelector(ActivitiesSelector);

    return <>
        <div className="card">
            {activities.length > 0 ? activities.map(activity => (
                <ActivityItem key={activity["description"]} activity={activity} onEdit={() => null} />
            )): <div>Nessun elemento presente</div>}
        </div>
    </>
}

export default ActivityList;