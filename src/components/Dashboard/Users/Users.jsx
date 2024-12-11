import React, { useState } from 'react';
import { Container, Content, ContainerName, Name, ID, Text, ButtonNotes, ButtonRefund, ButtonCreate, Th, Tr, Td } from './Users.styles';
import { guest } from '../../../data/guest';
import { MdAddCircleOutline, MdDeleteOutline } from "react-icons/md";
import { useNavigate, Outlet, useLocation } from 'react-router-dom';

export default function Users() {
    const [guests, setGuests] = useState(guest);
    const navigate = useNavigate();
    const location = useLocation();

    const handleCreate = () => navigate('create');

    const deleteGuest = (id) => {
        const updatedGuests = guests.filter((guest) => guest.id !== id);
        setGuests(updatedGuests);
    };

    const createUser = (newData) => {
        setGuests((prevGuests) => [...prevGuests, newData]);
    };

    return (
        <>
            <Outlet context={{ createUser }} />
            {location.pathname === '/home/users' && (
                <Container>
                    <ButtonCreate onClick={handleCreate}>
                        New Employee <MdAddCircleOutline size={20} />
                    </ButtonCreate>
                    <Content>
                        <table style={{ borderCollapse: 'collapse', width: '100%' }}>
                            <thead>
                                <tr>
                                    <Th>Guest</Th>
                                    <Th>Order Date</Th>
                                    <Th>Check In</Th>
                                    <Th>Check Out</Th>
                                    <Th>Special Request</Th>
                                    <Th>Room Type</Th>
                                    <Th>Status</Th>
                                    <Th>Actions</Th>
                                </tr>
                            </thead>
                            <tbody>
                                {guests.map((user) => (
                                    <Tr key={user.id}>
                                        <Td>
                                            <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                                                <img src={user.image} alt={`Guest ${user.name}`} style={{ width: '60px', borderRadius: '10px' }} />
                                                <div style={{textAlign:'left'}}>
                                                    <Name>{user.name}</Name>
                                                    <ID>#{user.id}</ID>
                                                </div>
                                            </div>
                                        </Td>
                                        <Td><Text>{user.order_date} 09:21 AM</Text></Td>
                                        <Td>
                                            <ContainerName>
                                                <Text>{user.check_in}</Text>
                                                <ID>9:46 PM</ID>
                                            </ContainerName>
                                        </Td>
                                        <Td>
                                            <ContainerName>
                                                <Text>{user.check_out}</Text>
                                                <ID>6:12 PM</ID>
                                            </ContainerName>
                                        </Td>
                                        <Td><ButtonNotes>View Notes</ButtonNotes></Td>
                                        <Td><Text>Deluxe A - {user.room_type}</Text></Td>
                                        <Td><ButtonRefund>Refund</ButtonRefund></Td>
                                        <Td>
                                            <MdDeleteOutline
                                                size={30}
                                                style={{ cursor: 'pointer' }}
                                                onClick={() => deleteGuest(user.id)}
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
