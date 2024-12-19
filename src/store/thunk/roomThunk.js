import { createAsyncThunk } from "@reduxjs/toolkit";
import { v4 as uuid } from "uuid";
import { room } from '../../data/room'

export const fetchRooms = createAsyncThunk('rooms/fetchRooms', async () => {
    const storedRooms = JSON.parse(localStorage.getItem('rooms')) || []
    return [...room, ...storedRooms]
})

export const fetchRoom = createAsyncThunk('rooms/fetchRoom', async (room) => {
    return room
})

export const unFetchRoom = createAsyncThunk('rooms/unFetchRoom', async () => {
    return null
})

export const createRoom = createAsyncThunk('rooms/createRoom', async (room) => {
    const rooms = JSON.parse(localStorage.getItem('rooms')) || [];
    const newRoom = { ...room, id: uuid() }
    const updatedRooms = [...rooms, newRoom]
    localStorage.setItem('rooms', JSON.stringify(updatedRooms))
    return [...room, ...updatedRooms];
})

export const updatedRoom = createAsyncThunk('rooms/updateRoom', async (room) => {
    const rooms = JSON.parse(localStorage.getItem('rooms'))
    const updatedRooms = rooms.map((roomMap) =>
        roomMap.id === room.id ?
            { ...roomMap, ...room }
            : roomMap
    )
    localStorage.setItem('rooms', JSON.stringify(updatedRooms))
    return [...room, ...updatedRooms];
})

export const deleteRoom = createAsyncThunk('rooms/delete', async (id) => {
    const rooms = JSON.parse(localStorage.getItem('rooms'))
    const updatedRooms = rooms.filter((room) => room.id !== id)
    localStorage.setItem('rooms', JSON.stringify(updatedRooms));
    return updatedRooms;
})