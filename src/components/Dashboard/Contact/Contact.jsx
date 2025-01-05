import { useNavigate, Outlet, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { unFetchContact, fetchContacts, deleteContact, fetchContact } from '../../../store/thunk/contactThunk'
import { useDispatch } from 'react-redux';
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
        { key: 'job_desc', name: 'Job Desc', width: '350px' },
        { key: 'days', name: 'Schedule' },
        { key: 'phone', name: 'Contact' },
        { key: 'status', name: 'Status' },
    ]

    const actions = {
        handleEdit: (data) => handleEdit(data),
        handleDelete: (id) => deleteContact(id),
        handleShow: (data) => handleShow(data)
    }



    return (
        <>
            <Outlet />
            {location.pathname === '/home/contacts' && (
                <GenericPage title='Contact' onCreate={handleCreate} filters={filters}>
                    <TableComponent titles={titles} datas={contacts} actions={actions} />
                </GenericPage>
            )}
        </>
    );
}