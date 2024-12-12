import { createSlice } from "@reduxjs/toolkit";
import { guest } from "../../data/guest";
import { v4 as uuidv4 } from "uuid";

export const userSlice = createSlice({
    name: 'users',
    initialState: {
        users: JSON.parse(localStorage.getItem('users')) || guest,
        user: null
    },
    reducers: {
        addUser: (state, action) => {
            const newUser = { ...action.payload, id: uuidv4() }
            const updatedUsers = [...state.users, newUser]
            localStorage.setItem('users', JSON.stringify(updatedUsers))
            return {
                ...state,
                users: updatedUsers
            }
        },
        removeUser: (state, action) => {
            const updatedUsers = state.users.filter((user) => user.id != action.payload)
            localStorage.setItem('users', JSON.stringify(updatedUsers));
            return {
                ...state,
                users: updatedUsers
            }
        },
        editUser: (state, action) => {
            const updatedUsers = state.users.map((user) => 
                user.id === action.payload.id
                    ? { ...user, ...action.payload }
                    : user
            )
            localStorage.setItem('users', JSON.stringify(updatedUsers))
            return {
                ...state,
                users: updatedUsers,
                user: null
            }
        },
        setUser: (state, action) => {
            return {
                ...state,
                user: action.payload
            }
        },
        unsetUser: (state) => {
            return {
                ...state,
                user: null
            }
        }
    }
})

export const { addUser, editUser, removeUser, setUser, unsetUser } = userSlice.actions;
export default userSlice.reducer;