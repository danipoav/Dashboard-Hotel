import { createAsyncThunk } from "@reduxjs/toolkit";
import { v4 as uuid } from "uuid";

export const fetchUsers = createAsyncThunk('users/fetchUsers', async () => {
    return JSON.parse(localStorage.getItem('users')) || []
})

export const fetchUser = createAsyncThunk('users/fetchUser', async (user) => {
    return user
})

export const unFetchUser = createAsyncThunk('users/unFetchUser', async () => {
    return null
})

export const createUser = createAsyncThunk('users/createUser', async (user) => {
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const newUser = { ...user, id: uuid() }
    const updatedUsers = [...users, newUser]
    localStorage.setItem('users', JSON.stringify(updatedUsers))
    return updatedUsers;
})

export const updatedUser = createAsyncThunk('users/updateUser', async (user) => {
    const users = JSON.parse(localStorage.getItem('users'))
    const updatedUsers = users.map((userMap) =>
        userMap.id === user.id ?
            { ...userMap, ...user }
            : userMap
    )
    localStorage.setItem('users', JSON.stringify(updatedUsers))
    return updatedUsers
})

export const deleteUser = createAsyncThunk('users/delete', async (id) => {
    const users = JSON.parse(localStorage.getItem('users'))
    const updatedUsers = users.filter((user) => user.id !== id)
    localStorage.setItem('users', JSON.stringify(updatedUsers));
    return updatedUsers
})