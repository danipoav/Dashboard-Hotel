import { Container, Content, Name, ID,Number, Text, ButtonCreate, Th, Tr, Td, Ul, Li, TextPayment } from "./Bookings-styles"
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { MdAddCircleOutline, MdDeleteOutline } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";
import { useLocation, useNavigate,Outlet } from "react-router-dom";
import { fetchBookings, fetchBooking, deleteBooking, unFetchBooking } from '../../../store/thunk/bookingThunk'

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




    return (
        <>
            <Outlet />
            {location.pathname === '/home/bookings' && (
                <Container>
                    <ButtonCreate onClick={handleCreate}>
                        New Booking <MdAddCircleOutline size={20} />
                    </ButtonCreate>
                    <Ul>
                        <Li active>All Bookings</Li>
                        <Li>Confirmed Bookings</Li>
                        <Li>Pending Bookings</Li>
                        <Li>Cancelled Bookings</Li>
                    </Ul>
                    <Content>
                        <table style={{ borderCollapse: 'collapse', width: '100%' }}>
                            <thead>
                                <tr>
                                    <Th>Name</Th>
                                    <Th>Request</Th>
                                    <Th>Check In/Out</Th>
                                    <Th>Room</Th>
                                    <Th>Price</Th>
                                    <Th>Status</Th>
                                    <Th>Actions</Th>
                                </tr>
                            </thead>
                            <tbody>
                                {bookings.map((booking) => (
                                    <Tr key={booking.id}>
                                        <Td>
                                            <div onClick={() => handleShow(booking)} style={{ display: 'flex', gap: '10px', alignItems: 'center', cursor: 'pointer' }}>
                                                <img src={booking.photo} alt={`Booking ${booking.name}`} style={{ width: '60px', borderRadius: '10px' }} />
                                                <div style={{ textAlign: 'left' }}>
                                                    <Name>{booking.name}</Name>
                                                    <ID style={{ fontSize: '0.4em' }}>#{booking.id}</ID>
                                                    <ID>{booking.booking_date}</ID>
                                                </div>
                                            </div>
                                        </Td>
                                        <Td><Text>{booking.requests}</Text></Td>
                                        <Td>
                                            <Text >{booking.check_in}</Text>
                                            <ID >{booking.check_out}</ID>
                                        </Td>
                                        <Td><Number>{booking.room}</Number></Td>
                                        <Td><Number >{booking.total} $<span>/TOTAL</span></Number></Td>
                                        <Td><TextPayment text={booking.status}>{booking.status}</TextPayment></Td>
                                        <Td>
                                            <FaRegEdit size={30} cursor={'pointer'} onClick={() => handleEdit(booking)} />
                                            <MdDeleteOutline size={30} style={{ cursor: 'pointer' }} onClick={() => dispatch(deleteBooking(booking.id))}
                                            />
                                        </Td>
                                    </Tr>
                                ))}
                            </tbody>
                        </table>
                    </Content>
                </Container>
            )}
        </>
    );
}
