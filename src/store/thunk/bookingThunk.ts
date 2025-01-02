import { createAsyncThunk } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";
import { BookingType, BookingTypeID } from "../../types/BookingType"

export const fetchBookings = createAsyncThunk<BookingTypeID[], void>(
    'bookings/fetchBookings',
    async () => {
        const local = JSON.parse(localStorage.getItem('bookings') || '[]');
        if (local.length) {
            return local;
        } else {
            const defaultBookings: BookingTypeID[] = [];
            localStorage.setItem('bookings', JSON.stringify(defaultBookings));
            return defaultBookings;
        }
    }
);

export const fetchBooking = createAsyncThunk<BookingTypeID, BookingTypeID>(
    'bookings/fetchBooking',
    async (booking) => {
        return booking;
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
        const bookings: BookingTypeID[] = JSON.parse(localStorage.getItem('bookings') || '[]');
        const updatedBookings = bookings.filter((booking) => booking.id !== id);
        localStorage.setItem('bookings', JSON.stringify(updatedBookings));
        return updatedBookings;
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
