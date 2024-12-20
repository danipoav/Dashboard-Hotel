import { Container, Content, ContainerName, Name, ID, Text, ButtonNotes, ButtonRefund, ButtonCreate, Th, Tr, Td, Ul, Li, TextStatus } from "./Bookings-styles"
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
        navigate('create')
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
                        <Li active>All Employee</Li>
                        <Li>Active Employee</Li>
                        <Li>Inactive Employee</Li>
                    </Ul>
                    <Content>
                        <table style={{ borderCollapse: 'collapse', width: '100%' }}>
                            <thead>
                                <tr>
                                    <Th>Name</Th>
                                    <Th>Request</Th>
                                    <Th>Check In/Out</Th>
                                    <Th>Room</Th>
                                    <Th>Total</Th>
                                    <Th>Payment</Th>
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
                                            <Text >{booking.check_out}</Text>
                                        </Td>
                                        <Td><Text>{booking.room}</Text></Td>
                                        <Td><TextStatus >{booking.total}</TextStatus></Td>
                                        <Td><Text>{booking.payment}</Text></Td>
                                        <Td><Text>{booking.status}</Text></Td>
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
