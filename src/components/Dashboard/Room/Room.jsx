import { MdAddCircleOutline, MdDeleteOutline } from "react-icons/md";
import { useNavigate, Outlet, useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { FaRegEdit } from "react-icons/fa";
import { useEffect } from 'react';
import { fetchRooms, deleteRoom, unFetchRoom, fetchRoom } from '../../../store/thunk/roomThunk';
import GenericPage from '../Generic/GenericPage';
import TableComponent from '../Generic/TableComponent';

export default function Room() {

  const dispatch = useDispatch();
  const rooms = useSelector((state) => state.rooms.rooms);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    dispatch(fetchRooms());
  }, [dispatch]);

  const handleCreate = () => {
    dispatch(unFetchRoom());
    navigate('create');
  };

  const handleEdit = (room) => {
    dispatch(fetchRoom(room));
    navigate('edit');
  };

  const handleShow = (room) => {
    navigate(`show/${room.id}`, { state: { room } });
  };

  const filters = [
    { name: 'All Rooms', active: true },
    { name: 'Active Rooms', active: false },
    { name: 'Inactive Rooms', active: false }
  ]

  const titles = [
    { key: 'bed_type', name: 'Bed Type' },
    { key: 'room_number', name: 'Room Number' },
    { key: 'facilities', name: 'Facilities' },
    { key: 'price', name: 'Rate' },
    { key: 'status', name: 'Status' },
  ]

  const actions = {
    handleEdit: (data) => handleEdit(data),
    handleDelete: (id) => deleteRoom(id),
    handleShow: (data) => handleShow(data)
  }

  return (
    <>
      <Outlet />
      {location.pathname === '/home/room' && (
        <GenericPage title={'Rooms'} onCreate={handleCreate} filters={filters}>
          <TableComponent titles={titles} datas={rooms} actions={actions} />
        </GenericPage>
      )}
    </>
  );
}
