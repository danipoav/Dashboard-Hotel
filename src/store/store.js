import { configureStore } from "@reduxjs/toolkit";
import authReducer from './slices/authSlice'
import roomSlice from './slices/roomSlice'
import userSlice from "./slices/userSlice";

const store = configureStore({
    reducer: {
        auth: authReducer,
        rooms: roomSlice,
        users: userSlice
    }
});

export default store;