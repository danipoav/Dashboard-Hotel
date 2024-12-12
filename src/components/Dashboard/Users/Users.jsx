import { Container, Content, ContainerName, Name, ID, Text, ButtonNotes, ButtonRefund, ButtonCreate, Th, Tr, Td, Ul, Li } from './Users.styles';
import { MdAddCircleOutline, MdDeleteOutline } from "react-icons/md";
import { useNavigate, Outlet, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { unFetchUser, fetchUser, deleteUser, fetchUsers } from '../../../store/thunk/userThunk';
import { useDispatch } from 'react-redux';
import { FaRegEdit } from "react-icons/fa";
import { useEffect } from 'react';


export default function Users() {

    const dispatch = useDispatch()
    const users = useSelector((state) => state.users.users)
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        dispatch(fetchUsers())
    }, [dispatch])

    const handleCreate = () => {
        dispatch(unFetchUser())
        navigate('create');
    };

    const handleEdit = (user) => {
        dispatch(fetchUser(user))
        navigate('create')
    }

    const handleShow = (user) => {
        console.log('aaaa')
        navigate(`show/${user.id}`, { state: { user } })
    }


    return (
        <>
            <Outlet />
            {location.pathname === '/home/users' && (
                <Container>
                    <ButtonCreate onClick={handleCreate}>
                        New Employee <MdAddCircleOutline size={20} />
                    </ButtonCreate>
                    <Ul>
                        <Li isActive>All Guest</Li>
                        <Li>Pending</Li>
                        <Li>Booked</Li>
                        <Li>Canceled</Li>
                        <Li>Refund</Li>
                    </Ul>
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
                                {users.map((user) => (
                                    <Tr key={user.id}>
                                        <Td>
                                            <div onClick={() => handleShow(user)} style={{ display: 'flex', gap: '10px', alignItems: 'center', cursor: 'pointer' }}>
                                                <img src={user.image} alt={`Guest ${user.name}`} style={{ width: '60px', borderRadius: '10px' }} />
                                                <div style={{ textAlign: 'left' }}>
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
                                            <FaRegEdit size={30} cursor={'pointer'} onClick={() => handleEdit(user)} />
                                            <MdDeleteOutline size={30} style={{ cursor: 'pointer' }} onClick={() => dispatch(deleteUser(user.id))}
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
