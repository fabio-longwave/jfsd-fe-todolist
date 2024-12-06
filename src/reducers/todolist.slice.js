import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    todoList: []
}

export const todoListSlice = createSlice({
    name: "todolist",
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

export const TodoListSelector = (state) => state.todolist.todoList;

export default todoListSlice.reducer;