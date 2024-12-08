import {combineReducers} from "@reduxjs/toolkit";
import {userSlice} from "./user.slice.js";
import {todoListSlice} from "./todoList.slice.js";

export const reducers = combineReducers({
    user: userSlice.reducer,
    todolist: todoListSlice.reducer
})