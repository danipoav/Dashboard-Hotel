import { createAsyncThunk } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

interface BookingData {
    name: string;
    photo: string;
    check_in: string;
    check_out: string;
    room: string;
    requests: string;
    booking_date: string;
    price: number;
    status: 'Paid' | 'Pending' | 'Refunded';
}

interface Booking extends BookingData {
    id: string;
}

interface BookingState {
    bookings: Booking[];
    booking: Booking | null;
}

export const fetchBookings = createAsyncThunk<Booking[], void>(
    'bookings/fetchBookings', 
    async () => {
        const local = JSON.parse(localStorage.getItem('bookings') || '[]');
        if (local.length) {
            return local;
        } else {
            const defaultBookings: Booking[] = []; 
            localStorage.setItem('bookings', JSON.stringify(defaultBookings));
            return defaultBookings;
        }
    }
);

export const fetchBooking = createAsyncThunk<Booking, Booking>(
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

export const deleteBooking = createAsyncThunk<Booking[], string>(
    'booking/deleteBooking', 
    async (id) => {
        const bookings: Booking[] = JSON.parse(localStorage.getItem('bookings') || '[]');
        const updatedBookings = bookings.filter((booking) => booking.id !== id);
        localStorage.setItem('bookings', JSON.stringify(updatedBookings));
        return updatedBookings;
    }
);

export const createBooking = createAsyncThunk<Booking[], BookingData>(
    'bookings/createBooking', 
    async (newBooking) => {
        const bookings: Booking[] = JSON.parse(localStorage.getItem('bookings') || '[]');
        const updatedNewBooking = { ...newBooking, id: uuidv4() };
        const updatedBookings = [...bookings, updatedNewBooking];
        localStorage.setItem('bookings', JSON.stringify(updatedBookings));
        return updatedBookings;
    }
);

export const editBooking = createAsyncThunk<Booking[], Booking>(
    'bookings/editBookings', 
    async (updatedBooking) => {
        const bookings: Booking[] = JSON.parse(localStorage.getItem('bookings') || '[]');
        const updatedBookings = bookings.map((booking) =>
            booking.id === updatedBooking.id ? { ...booking, ...updatedBooking } : booking
        );
        localStorage.setItem('bookings', JSON.stringify(updatedBookings));
        return updatedBookings;
    }
);
