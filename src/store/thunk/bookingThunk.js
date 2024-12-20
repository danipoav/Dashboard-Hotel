import { createAsyncThunk } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";
import { booking } from '../../data/booking'

export const fetchBookings = createAsyncThunk('bookings/fetchBookings', async () => {
    const local = JSON.parse(localStorage.getItem('bookings'));
    if (local) {
        return local
    } else {
        localStorage.setItem('bookings', JSON.stringify(booking))
        return booking
    }
})

export const fetchBooking = createAsyncThunk('bookings/fetchBooking', async (booking) => {
    return booking;
})

export const unFetchBooking = createAsyncThunk('bookings/unFetchBooking', async () => {
    return null;
})

export const deleteBooking = createAsyncThunk('booking/deleteBooking', async (id) => {
    const bookings = JSON.parse(localStorage.getItem('bookings'));
    const updatedBookings = bookings.filter((booking) => booking.id !== id)
    localStorage.setItem('bookings', JSON.stringify(updatedBookings))
    return updatedBookings;
})

export const createBooking = createAsyncThunk('bookings/createBooking', async (newBooking) => {
    const bookings = JSON.parse(localStorage.getItem('bookings'));
    const updatedNewBooking = { ...newBooking, id: uuidv4() }
    const updatedBookings = [...bookings, updatedNewBooking]
    localStorage.setItem('bookings', JSON.stringify(updatedBookings))
    return updatedBookings
})

export const editBooking = createAsyncThunk('bookings/editBookings', async (booking) => {
    const bookings = JSON.parse(localStorage.getItem('bookings'));
    const updatedBookings = bookings.map((bookingMap) =>
        bookingMap.id === booking.id ?
            { ...bookingMap, ...booking }
            : bookingMap
    )
    localStorage.setItem('bookings', JSON.stringify(updatedBookings))
    return updatedBookings
})