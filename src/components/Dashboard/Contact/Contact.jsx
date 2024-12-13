import { Container, Content, ContainerName, Name, ID, Text, ButtonNotes, ButtonRefund, ButtonCreate, Th, Tr, Td, Ul, Li } from './Contact.styles';
import { MdAddCircleOutline, MdDeleteOutline } from "react-icons/md";
import { useNavigate, Outlet, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { unFetchUser, fetchUser, deleteUser, fetchUsers } from '../../../store/thunk/userThunk';
import { useDispatch } from 'react-redux';
import { FaRegEdit } from "react-icons/fa";
import { useEffect } from 'react';
import { contact } from '../../../data/contac';


export default function Contact() {

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

    const contacts = contact;


    return (
        <>
            <Outlet />
            {location.pathname === '/home/contacts' && (
                <Container>
                    <ButtonCreate onClick={handleCreate}>
                        New Employee <MdAddCircleOutline size={20} />
                    </ButtonCreate>
                    <Ul>
                        <Li isActive={true}>All Employee</Li>
                        <Li>Active Employee</Li>
                        <Li>Inactive Employee</Li>
                    </Ul>
                    <Content>
                        <table style={{ borderCollapse: 'collapse', width: '100%' }}>
                            <thead>
                                <tr>
                                    <Th>Name</Th>
                                    <Th>Job Desk</Th>
                                    <Th>Schedule</Th>
                                    <Th>Contact</Th>
                                    <Th style={{ textAlign: 'center' }}>Status</Th>
                                    <Th style={{ textAlign: 'center' }}>Actions</Th>
                                </tr>
                            </thead>
                            <tbody>
                                {contacts.map((contact) => (
                                    <Tr key={contact.id}>
                                        <Td>
                                            <div onClick={() => handleShow(user)} style={{ display: 'flex', gap: '10px', alignItems: 'center', cursor: 'pointer' }}>
                                                <img src={contact.photo} alt={`Guest ${contact.name}`} style={{ width: '60px', borderRadius: '10px' }} />
                                                <div style={{ textAlign: 'left' }}>
                                                    <Name>{contact.name}</Name>
                                                    <ID style={{ fontSize: '0.4em' }}>#{contact.id}</ID>
                                                    <ID>{contact.join_date}</ID>
                                                </div>
                                            </div>
                                        </Td>
                                        <Td><Text style={{ textAlign: 'left' }}>{contact.job_desc}</Text></Td>
                                        <Td>
                                            <Text style={{ textAlign: 'left' }}>{contact.days[0]},{contact.days[1]}</Text>
                                            <ID style={{ textAlign: 'left' }}>Check schedule</ID>
                                        </Td>
                                        <Td><Text>{contact.phone}</Text></Td>
                                        <Td><Text>{contact.status}</Text></Td>
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
