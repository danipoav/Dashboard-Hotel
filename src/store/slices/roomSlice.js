import { createSlice } from "@reduxjs/toolkit";
import { room } from "../../data/room";
import { v4 as uuidv4 } from "uuid";

export const roomSlice = createSlice({
    name: 'rooms',
    initialState: room,
    reducers: {
        addRoom: (state, action) => {
            return [
                ...state,
                {
                    ...action.payload,
                    id: uuidv4()
                }
            ]
        },
        removeRoom: (state, action) => {
            const id = action.payload;
            return state.filter((room) => room.id != id)
        }
    }
})

export const { addRoom, removeRoom } = roomSlice.actions;
export default roomSlice.reducer;