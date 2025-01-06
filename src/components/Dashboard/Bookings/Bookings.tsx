import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useLocation, useNavigate, Outlet } from "react-router-dom";
import { fetchBookings, fetchBooking, deleteBooking, unFetchBooking } from '../../../store/thunk/bookingThunk'
import GenericPage from "../Generic/GenericPage";
import TableComponent from "../Generic/TableComponent";
import { AppDispatch, RootState } from "../../../store/store";
import React from "react";

interface Booking {
    id: string;
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

export default function Bookings() {
    const dispatch = useDispatch<AppDispatch>()
    const bookings = useSelector((state: RootState) => state.bookings.bookings);
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        dispatch(fetchBookings())
    }, [dispatch])

    const handleCreate = () => {
        dispatch(unFetchBooking())
        navigate('create');
    };

    const handleEdit = (booking: Booking) => {
        dispatch(fetchBooking(booking))
        navigate('edit')
    }

    const handleShow = (booking: Booking) => {
        navigate(`show/${booking.id}`, { state: { booking } })
    }

    const filters = [
        { name: 'All Bookings', active: true },
        { name: 'Confirmed Bookings', active: false },
        { name: 'Pending Bookings', active: false },
        { name: 'Cancelled Bookings', active: false },
    ]

    const titles = [
        { key: 'requests', name: 'Request' },
        { key: 'booking_date', name: 'Booking Date' },
        { key: 'check_in', name: 'Check In' },
        { key: 'check_out', name: 'Check Out' },
        { key: 'room', name: 'Room' },
        { key: 'price', name: 'Price' },
        { key: 'status', name: 'Status' },
    ]

    const actions = {
        handleEdit: (data: Booking) => handleEdit(data),
        handleDelete: (id: string) => deleteBooking(id),
        handleShow: (data: Booking) => handleShow(data),
    }

    return (
        <>
            <Outlet />
            {location.pathname === '/home/bookings' && (
                <GenericPage title={'Booking'} filters={filters} onCreate={handleCreate}>
                    <TableComponent titles={titles} datas={bookings} actions={actions} />
                </GenericPage>
            )}
        </>
    );
}
