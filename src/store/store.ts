import { configureStore } from "@reduxjs/toolkit";
import authReducer from './slices/authSlice';
import roomSlice from './slices/roomSlice';
import userSlice from './slices/userSlice';
import contactSlice from './slices/contactSlice';
import bookingSlice from './slices/bookingSlice';

const store = configureStore({
  reducer: {
    auth: authReducer,
    rooms: roomSlice,
    users: userSlice,
    contacts: contactSlice,
    bookings: bookingSlice
  }
});

export type RootState = ReturnType<typeof store.getState>; 
export type AppDispatch = typeof store.dispatch;

export default store;
