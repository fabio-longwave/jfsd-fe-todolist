import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    user: {
        email: null,
        displayName: null,
        accessToken: null,
        refreshToken: null,
    }
}

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setUser: (state, action) => {
            state.user = action.payload
        },
        clearUser: (state) => state.user = initialState
    }
})

export const {setUser, clearUser} = userSlice.actions;

export const UserSelector = (state) => state.user;

export default userSlice.reducer;