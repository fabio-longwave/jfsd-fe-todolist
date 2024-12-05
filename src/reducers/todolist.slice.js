import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    todoList: []
}

export const todoListSlice = createSlice({
    name: "todoList",
    initialState,
    reducers: {
        setTodoList: (state, action) => {
            state.todoList = action.payload
        },
        addTodo: (state, action) => {
           state.todoList.push(action.payload)
        },
        editTodo: (state, action) => {},
        deleteTodo: (state, action) => {},
        clearTodoList: (state, action) => ({...initialState})
    }
})

export const {setTodoList, addTodo, editTodo, deleteTodo} = todoListSlice.actions;

export const TodoSelector = (state) => state.todoList;

export default todoListSlice.reducer;