import { createAsyncThunk } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";
import { BookingType, BookingTypeID } from "../../types/BookingType"
import fetchAPI from "../../components/Fetch/fetchAPI";
import { CgTab } from "react-icons/cg";

export const fetchBookings = createAsyncThunk<BookingTypeID[], void>(
    'bookings/fetchBookings',
    async () => {
        try {
            const bookings = await fetchAPI('bookings', {
                method: 'GET'
            })
            if (bookings) {
                console.log(bookings);
                return bookings;
            } else {
                throw new Error('Error getting all bookings')
            }

        } catch (error) {
            console.log(error.message || 'Error getting Bookings')
            throw error;
        }
    }
);

export const fetchBooking = createAsyncThunk<BookingTypeID[], string>(
    'bookings/fetchBooking',
    async (id) => {
        try {
            const booking = await fetchAPI(`bookings/${id}`, {
                method: 'GET'
            })
            if (booking) {
                console.log(booking)
                return booking
            } else {
                throw new Error('Error getting one booking')
            }
        } catch (error) {
            console.log(error.message || 'Error getting one booking')
            throw error;
        }
    }
);

export const unFetchBooking = createAsyncThunk<null, void>(
    'bookings/unFetchBooking',
    async () => {
        return null;
    }
);

export const deleteBooking = createAsyncThunk<BookingTypeID[], string>(
    'booking/deleteBooking',
    async (id) => {
        try {
            const bookings = await fetchAPI(`bookings/${id}`, {
                method: 'DELETE'
            })
            if (bookings) {
                console.log(bookings)
                return bookings;
            } else {
                throw new Error('Error getting bookings from deleteBooking')
            }
        } catch (error) {
            console.log(error.message || 'Error removing one booking')
            throw error;
        }
    }
);

export const createBooking = createAsyncThunk<BookingTypeID[], BookingType>(
    'bookings/createBooking',
    async (newBooking) => {
        const bookings: BookingTypeID[] = JSON.parse(localStorage.getItem('bookings') || '[]');
        const updatedNewBooking = { ...newBooking, id: uuidv4() };
        const updatedBookings = [...bookings, updatedNewBooking];
        localStorage.setItem('bookings', JSON.stringify(updatedBookings));
        return updatedBookings;
    }
);

export const editBooking = createAsyncThunk<BookingTypeID[], BookingTypeID>(
    'bookings/editBookings',
    async (updatedBooking) => {
        const bookings: BookingTypeID[] = JSON.parse(localStorage.getItem('bookings') || '[]');
        const updatedBookings = bookings.map((booking) =>
            booking.id === updatedBooking.id ? { ...booking, ...updatedBooking } : booking
        );
        localStorage.setItem('bookings', JSON.stringify(updatedBookings));
        return updatedBookings;
    }
);
