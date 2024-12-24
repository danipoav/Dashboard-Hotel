import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useLocation, useNavigate, Outlet } from "react-router-dom";
import { fetchBookings, fetchBooking, deleteBooking, unFetchBooking } from '../../../store/thunk/bookingThunk'
import GenericPage from "../Generic/GenericPage";
import TableComponent from "../Generic/TableComponent";

export default function Bookings() {
    const dispatch = useDispatch()
    const bookings = useSelector((state) => state.bookings.bookings);
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        dispatch(fetchBookings())
    }, [dispatch])

    const handleCreate = () => {
        unFetchBooking()
        navigate('create');
    };

    const handleEdit = (booking) => {
        dispatch(fetchBooking(booking))
        navigate('edit')
    }

    const handleShow = (booking) => {
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
        handleEdit: (data) => handleEdit(data),
        handleDelete: (id) => deleteBooking(id),
        handleShow: (data) => handleShow(data),
    }

    return (
        <>
            <Outlet />
            {location.pathname === '/home/bookings' && (
                <GenericPage title={'Booking'} filters={filters}>
                    <TableComponent titles={titles} datas={bookings} actions={actions} />
                </GenericPage>
            )}
        </>
    );
}
