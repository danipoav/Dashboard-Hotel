import { Container, Content, ContainerName, Name, ID, Text, ButtonNotes, ButtonRefund, ButtonCreate, Th, Tr, Td, Ul, Li, TextStatus } from './Contact.styles';
import { MdAddCircleOutline, MdDeleteOutline } from "react-icons/md";
import { useNavigate, Outlet, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { unFetchContact, fetchContacts, deleteContact, fetchContact } from '../../../store/thunk/contactThunk'
import { useDispatch } from 'react-redux';
import { FaRegEdit } from "react-icons/fa";
import { useEffect } from 'react';
import GenericPage from '../Generic/GenericPage';
import TableComponent from '../Generic/TableComponent';


export default function Contact() {

    const dispatch = useDispatch()
    const contacts = useSelector((state) => state.contacts.contacts);
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        dispatch(fetchContacts())
    }, [dispatch])

    const handleCreate = () => {
        unFetchContact()
        navigate('create');
    };

    const handleEdit = (contact) => {
        dispatch(fetchContact(contact))
        navigate('create')
    }

    const handleShow = (contact) => {
        navigate(`show/${contact.id}`, { state: { contact } })
    }

    const filters = [
        { name: 'All Employee', active: true },
        { name: 'Active Employee', active: false },
        { name: 'Inactive Employee', active: false },
    ];

    const titles = [
        { name: 'Name' },
        { name: 'Job Desk' },
        { name: 'Schedule' },
        { name: 'Contact' },
        { name: 'Status' },
        { name: 'Actions' },
    ]




    return (
        <>
            <Outlet />
            {location.pathname === '/home/contacts' && (
                // <Container>
                //     <ButtonCreate onClick={handleCreate}>
                //         New Employee <MdAddCircleOutline size={20} />
                //     </ButtonCreate>
                //     <Ul>
                //         <Li active>All Employee</Li>
                //         <Li>Active Employee</Li>
                //         <Li>Inactive Employee</Li>
                //     </Ul>
                //     <Content>
                //         <table style={{ borderCollapse: 'collapse', width: '100%' }}>
                //             <thead>
                //                 <tr>
                //                     <Th>Name</Th>
                //                     <Th>Job Desk</Th>
                //                     <Th>Schedule</Th>
                //                     <Th>Contact</Th>
                //                     <Th>Status</Th>
                //                     <Th>Actions</Th>
                //                 </tr>
                //             </thead>
                //             <tbody>
                //                 {contacts.map((contact) => (
                //                     <Tr key={contact.id}>
                //                         <Td>
                //                             <div onClick={() => handleShow(contact)} style={{ display: 'flex', gap: '10px', alignItems: 'center', cursor: 'pointer' }}>
                //                                 <img src={contact.photo} alt={`Guest ${contact.name}`} style={{ width: '60px', borderRadius: '10px' }} />
                //                                 <div style={{ textAlign: 'left' }}>
                //                                     <Name>{contact.name}</Name>
                //                                     <ID style={{ fontSize: '0.4em' }}>#{contact.id}</ID>
                //                                     <ID>{contact.join_date}</ID>
                //                                 </div>
                //                             </div>
                //                         </Td>
                //                         <Td><Text style={{ width: '350px' }}>{contact.job_desc}</Text></Td>
                //                         <Td>
                //                             <Text >{contact.days[0]},{contact.days[1]}</Text>
                //                             <ID>Check schedule</ID>
                //                         </Td>
                //                         <Td><Text>{contact.phone}</Text></Td>
                //                         <Td><TextStatus status={contact.status} style={{ textTransform: 'uppercase' }}>{contact.status}</TextStatus></Td>
                //                         <Td>
                //                             <FaRegEdit size={30} cursor={'pointer'} onClick={() => handleEdit(contact)} />
                //                             <MdDeleteOutline size={30} style={{ cursor: 'pointer' }} onClick={() => dispatch(deleteContact(contact.id))}
                //                             />
                //                         </Td>
                //                     </Tr>
                //                 ))}
                //             </tbody>
                //         </table>
                //     </Content>
                // </Container>
                <GenericPage title='Contact' onCreate={handleCreate} filters={filters}>
                    <TableComponent titles={titles} />
                </GenericPage>
            )}
        </>
    );
}
