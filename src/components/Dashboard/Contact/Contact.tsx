import { useNavigate, Outlet, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { unFetchContact, fetchContacts, deleteContact, fetchContact } from '../../../store/thunk/contactThunk'
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import GenericPage from '../Generic/GenericPage';
import TableComponent from '../Generic/TableComponent';
import { AppDispatch, RootState } from '../../../store/store';
import React from 'react';

type Day = "Monday" | "Tuesday" | "Wednesday" | "Thursday" | "Friday" | "Saturday" | "Sunday";

interface Contact {
    name: string;
    id: string;
    join_date: string;
    job_desc: string;
    phone: string;
    status: "active" | "inactive";
    days: Day[];
    photo: string;
}

export default function Contact() {

    const dispatch = useDispatch<AppDispatch>()
    const contacts = useSelector((state: RootState) => state.contacts.contacts);
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        dispatch(fetchContacts())
    }, [dispatch])

    const handleCreate = () => {
        unFetchContact()
        navigate('create');
    };

    const handleEdit = (contact: Contact) => {
        dispatch(fetchContact(contact))
        navigate('create')
    }

    const handleShow = (contact: Contact) => {
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
        handleEdit: (data: Contact) => handleEdit(data),
        handleDelete: (id: string) => deleteContact(id),
        handleShow: (data: Contact) => handleShow(data)
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
