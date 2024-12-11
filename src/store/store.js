import { configureStore } from "@reduxjs/toolkit";
import authReducer from './slices/authSlice'
import roomSlice from './slices/roomSlice'

const store = configureStore({
    reducer: {
        auth: authReducer,
        rooms: roomSlice
    }
});

export default store;