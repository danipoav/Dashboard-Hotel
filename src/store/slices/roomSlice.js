import { createSlice } from "@reduxjs/toolkit";
import { room } from "../../data/room";
import { v4 as uuidv4 } from "uuid";

export const roomSlice = createSlice({
    name: 'rooms',
    initialState: {
        rooms: JSON.parse(localStorage.getItem('rooms')) || room,
        room: null
    },
    reducers: {
        addRoom: (state, action) => {
            const newRoom = { ...action.payload, id: uuidv4() }
            const updatedRooms = [...state.rooms, newRoom]
            localStorage.setItem('rooms', JSON.stringify(updatedRooms));
            return {
                ...state,
                rooms: updatedRooms
            }
        },
        removeRoom: (state, action) => {
            const updatedRooms = state.rooms.filter((room) => room.id != action.payload);
            localStorage.setItem('rooms', JSON.stringify(updatedRooms))
            return {
                ...state,
                rooms: updatedRooms
            }
        },
        editRoom: (state, action) => {
            const updatedRooms = state.rooms.map((room) =>
                room.id === action.payload.id
                    ? { ...room, ...action.payload }
                    : room
            );
            localStorage.setItem('rooms', JSON.stringify(updatedRooms));
            return {
                ...state,
                rooms: updatedRooms,
                room: null
            }
        },
        setRoom: (state, action) => {
            return {
                ...state,
                room: action.payload
            }
        },
        unsetRoom: (state) => {
            return {
                ...state,
                room: null
            }
        }
    }
})

export const { addRoom, removeRoom, setRoom, editRoom, unsetRoom } = roomSlice.actions;
export default roomSlice.reducer;