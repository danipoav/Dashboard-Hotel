import { configureStore } from "@reduxjs/toolkit";
import authReducer from './slices/authSlice'
import roomSlice from './slices/roomSlice'
import userSlice from "./slices/userSlice";
import contactSlice from './slices/contactSlice'

const store = configureStore({
    reducer: {
        auth: authReducer,
        rooms: roomSlice,
        users: userSlice,
        contacts: contactSlice
    }
});

export default store;