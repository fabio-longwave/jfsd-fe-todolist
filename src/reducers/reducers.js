import {combineReducers} from "@reduxjs/toolkit";
import {userSlice} from "./user.slice.js";
import {activitiesSlice} from "./activities.slice.js";

export const reducers = combineReducers({
    user: userSlice.reducer,
    activities: activitiesSlice.reducer
})