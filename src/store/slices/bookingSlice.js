import { createSlice } from "@reduxjs/toolkit";
import { fetchBookings, fetchBooking, unFetchBooking, deleteBooking, createBooking, editBooking } from '../thunk/bookingThunk'

export const bookingSlice = createSlice({
    name: 'bookings',
    initialState: {
        bookings: [],
        booking: null
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchBookings.fulfilled, (state, action) => {
                state.bookings = action.payload;
            })
            .addCase(fetchBooking.fulfilled, (state, action) => {
                state.booking = action.payload
            })
            .addCase(unFetchBooking.fulfilled, (state, action) => {
                state.booking = action.payload
            })
            .addCase(createBooking.fulfilled, (state, action) => {
                state.bookings = action.payload
            })
            .addCase(editBooking.fulfilled, (state, action) => {
                state.bookings = action.payload
            })
            .addCase(deleteBooking.fulfilled, (state, action) => {
                state.bookings = action.payload
            })
    }
})

export default bookingSlice.reducer;