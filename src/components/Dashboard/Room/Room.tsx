import { MdAddCircleOutline, MdDeleteOutline } from "react-icons/md";
import { useNavigate, Outlet, useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { FaRegEdit } from "react-icons/fa";
import { useEffect } from 'react';
import { fetchRooms, deleteRoom, unFetchRoom, fetchRoom } from '../../../store/thunk/roomThunk';
import GenericPage from '../Generic/GenericPage';
import TableComponent from '../Generic/TableComponent';
import { AppDispatch, RootState } from '../../../store/store';
import React from "react";
import { RoomTypeID } from "../../../types/RoomType";



export default function Room() {
  const dispatch = useDispatch<AppDispatch>();
  const rooms = useSelector((state: RootState) => state.rooms.rooms);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    dispatch(fetchRooms());
  }, [dispatch]);

  const handleCreate = () => {
    dispatch(unFetchRoom());
    navigate('create');
  };

  const handleEdit = (id: string) => {
    dispatch(fetchRoom(id));
    navigate('edit');
  };

  const handleShow = (id: string) => {
    dispatch(fetchRoom(id))
    navigate(`show/${id}`);
  };

  const filters = [
    { name: 'All Rooms', active: true },
    { name: 'Active Rooms', active: false },
    { name: 'Inactive Rooms', active: false },
  ];

  const titles = [
    { key: 'bed_type', name: 'Bed Type' },
    { key: 'room_number', name: 'Room Number' },
    { key: 'facilities', name: 'Facilities' },
    { key: 'price', name: 'Rate' },
    { key: 'status', name: 'Status' },
  ];

  const actions = {
    handleEdit: (id: string) => handleEdit(id),
    handleDelete: (id: string) => dispatch(deleteRoom(id)),
    handleShow: (id: string) => handleShow(id),
  };

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
