import React, { useState } from 'react'
import { Container, Content, Card, CardGuest, ContainerName, Name, ID, Text, ButtonNotes, ButtonRefund, ButtonCreate } from './Users.styles'
import { guest } from '../../../data/guest'
import { MdAddCircleOutline } from "react-icons/md";
import { useNavigate, Outlet, useLocation } from 'react-router-dom';
import { MdDeleteOutline } from "react-icons/md";

export default function Users() {

    const [guests, setGuests] = useState(guest)
    const navigate = useNavigate();
    const location = useLocation();

    const handleCreate = () => {
        navigate('create')
    }

    const deleteGuest = (id) => {
        const updateList = guests.filter((guest) => guest.id !== id);
        setGuests(updateList)
    }

    const createUser = (newData) => {
        setGuests([...guests, newData])
    }

    return (
        <>
            <Outlet context={{ createUser }} />
            {location.pathname === '/home/users' && (
                <Container>
                    <ButtonCreate onClick={handleCreate}>
                        New Employee<MdAddCircleOutline size={20} />
                    </ButtonCreate>
                    <Content>
                        {guests.map((user) => (
                            <Card key={user.id}>
                                <CardGuest>
                                    <img src={user.image} alt="Random" />
                                    <ContainerName>
                                        <Name>{user.name}</Name>
                                        <ID>#{user.id}</ID>
                                    </ContainerName>
                                    <Text>{user.order_date} 09:21 AM</Text>
                                    <ContainerName>
                                        <Text>{user.check_in}</Text>
                                        <ID>9.46 PM</ID>
                                    </ContainerName>
                                    <ContainerName>
                                        <Text>{user.check_out}</Text>
                                        <ID>6.12 PM</ID>
                                    </ContainerName>
                                    <ButtonNotes>View Notes</ButtonNotes>
                                    <Text>Deluxe A - {user.room_type}</Text>
                                    <ButtonRefund>Refund</ButtonRefund>
                                    <MdDeleteOutline size={30} cursor={'pointer'} onClick={() => deleteGuest(user.id)} />
                                </CardGuest>
                            </Card>
                        ))}
                    </Content>
                </Container>
            )}
        </>
    )
}
