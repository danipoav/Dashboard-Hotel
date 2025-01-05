import { useNavigate, Outlet, useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { unFetchUser, fetchUser, deleteUser, fetchUsers } from '../../../store/thunk/userThunk';
import GenericPage from '../Generic/GenericPage';
import TableComponent from '../Generic/TableComponent';
import { RootState, AppDispatch } from '../../../store/store';
import { UserTypeID } from '../../../types/UserType';
import React from 'react';

export default function Users() {
    const dispatch = useDispatch<AppDispatch>();
    const users = useSelector((state: RootState) => state.users.users);
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        dispatch(fetchUsers());
    }, [dispatch]);

    const handleCreate = () => {
        dispatch(unFetchUser());
        navigate('create');
    };

    const handleEdit = (user: UserTypeID) => {
        dispatch(fetchUser(user));
        navigate('create');
    };

    const handleShow = (user: UserTypeID) => {
        dispatch(fetchUser(user))
        navigate(`show/${user.id}`, { state: { user } });
    };

    const filters = [
        { name: 'All Users', active: true },
        { name: 'Pending Users', active: false },
        { name: 'Booked Users', active: false },
        { name: 'Canceled Users', active: false },
        { name: 'Refund Users', active: false },
    ];

    const titles = [
        { key: 'order_date', name: 'Order Date' },
        { key: 'check_in', name: 'Check In' },
        { key: 'check_out', name: 'Check Out' },
        { key: 'room_type', name: 'Room Type' },
        { key: 'status', name: 'Status' },
    ];

    const actions = {
        handleEdit: (data: UserTypeID) => handleEdit(data),
        handleDelete: (id: string) => deleteUser(id),
        handleShow: (data: UserTypeID) => handleShow(data),
    };

    return (
        <>
            <Outlet />
            {location.pathname === '/home/users' && (
                <GenericPage onCreate={handleCreate} filters={filters} title={'User'}>
                    <TableComponent titles={titles} actions={actions} datas={users} />
                </GenericPage>
            )}
        </>
    );
}
