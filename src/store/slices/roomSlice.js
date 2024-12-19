import { createSlice } from "@reduxjs/toolkit";
import { fetchRooms, fetchRoom, unFetchRoom, updatedRoom, createRoom, deleteRoom } from "../thunk/roomThunk";

export const roomSlice = createSlice({
    name: 'rooms',
    initialState: {
        rooms: [],
        room: null
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchRooms.fulfilled, (state, action) => {
                localStorage.setItem('rooms', JSON.stringify(state.rooms))
                state.rooms = action.payload;
            })
            .addCase(fetchRoom.fulfilled, (state, action) => {
                state.room = action.payload
            })
            .addCase(unFetchRoom.fulfilled, (state, action) => {
                state.room = action.payload
            })
            .addCase(createRoom.fulfilled, (state, action) => {
                state.rooms = action.payload
            })
            .addCase(updatedRoom.fulfilled, (state, action) => {
                state.rooms = action.payload
            })
            .addCase(deleteRoom.fulfilled, (state, action) => {
                state.rooms = action.payload
            })
    }
})

export const { addRoom, removeRoom, setRoom, editRoom, unsetRoom } = roomSlice.actions;
export default roomSlice.reducer;