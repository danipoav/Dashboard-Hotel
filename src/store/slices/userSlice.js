import { createSlice } from "@reduxjs/toolkit";
import { createUser, deleteUser, fetchUser, fetchUsers, unFetchUser, updatedUser } from "../thunk/userThunk";

export const userSlice = createSlice({
    name: 'users',
    initialState: {
        users: [],
        user: null
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchUsers.fulfilled, (state, action) => {
                state.users = action.payload;
            })
            .addCase(fetchUser.fulfilled, (state, action) => {
                state.user = action.payload
            })
            .addCase(unFetchUser.fulfilled, (state, action) => {
                state.user = action.payload
            })
            .addCase(createUser.fulfilled, (state, action) => {
                state.users = action.payload
            })
            .addCase(updatedUser.fulfilled, (state, action) => {
                state.users = action.payload
            })
            .addCase(deleteUser.fulfilled, (state, action) => {
                state.users = action.payload
            })
    }
})

export const { addUser, editUser, removeUser, setUser, unsetUser } = userSlice.actions;
export default userSlice.reducer;