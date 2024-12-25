import { useNavigate, Outlet, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { unFetchUser, fetchUser, deleteUser, fetchUsers } from '../../../store/thunk/userThunk';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import GenericPage from '../Generic/GenericPage';
import TableComponent from '../Generic/TableComponent';


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

    const filters = [
        { name: 'All Users', active: true },
        { name: 'Pending Users', active: false },
        { name: 'Booked Users', active: false },
        { name: 'Canceled Users', active: false },
        { name: 'Refund Users', active: false },
    ]

    const titles = [
        { key: 'order_date', name: 'Order Date' },
        { key: 'check_in', name: 'Check In' },
        { key: 'check_out', name: 'Check Out' },
        { key: 'room_type', name: 'Room Type' },
        { key: 'status', name: 'Status' },
    ]

    const actions = {
        handleEdit: (data) => handleEdit(data),
        handleDelete: (id) => deleteUser(id),
        handleShow: (data) => handleShow(data),
    }


    return (
        <>
            <Outlet />
            {location.pathname === '/home/users' && (
                <GenericPage handleCreate={handleCreate} filters={filters} title={'User'}>
                    <TableComponent titles={titles} actions={actions} datas={users} />
                </GenericPage>
            )}
        </>
    );
}
