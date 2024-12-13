import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    activities: []
}

export const activitiesSlice = createSlice({
    name: "activities",
    initialState,
    reducers: {
        setActivities: (state, action) => {
            state.activities = action.payload
        },
        addActivity: (state, action) => {
           state.activities.push(action.payload)
        },
        editActivity: (state, action) => {
            const index = state.activities.findIndex((activity) => activity["_id"] === action.payload.id)
            state.activities[index] = {...state.activities[index], ...action.payload.activity};
        },
        removeActivity: (state, action) => {
            state.activities = state.activities.filter((activity) => activity['_id'] !== action.payload)
        },
        setActivityStatus: (state, action) => {
            state.activities = state.activities.map((activity) => {
                if(activity['_id'] === action.payload.id) {
                    activity.status = action.payload.status;
                }
                return activity
            });
        },
        clearActivityList: () => initialState
    }
})

export const {
    setActivities,
    addActivity,
    editActivity,
    removeActivity,
    setActivityStatus,
    clearActivityList
} = activitiesSlice.actions;

export const ActivitiesSelector = (state) => state.activities.activities;

export default activitiesSlice.reducer;