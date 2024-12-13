import { Container, Content, CardGuest, ContainerName, Name, ID, ButtonStatus, Price, ButtonCreate, Th, Tr, Td, Ul, Li } from './Room.styles';
import { MdAddCircleOutline, MdDeleteOutline } from "react-icons/md";
import { useNavigate, Outlet, useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { FaRegEdit } from "react-icons/fa";
import { useEffect } from 'react';
import { fetchRooms, deleteRoom, unFetchRoom, fetchRoom } from '../../../store/thunk/roomThunk';

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
    navigate('create');
  };

  const handleShow = (room) => {
    navigate(`show/${room.id}`, { state: { room } });
  };

  return (
    <>
      <Outlet />
      {location.pathname === '/home/room' && (
        <Container>
          <ButtonCreate onClick={handleCreate}>
            New Room <MdAddCircleOutline size={20} />
          </ButtonCreate>
          <Ul>
            <Li isActive>All Rooms</Li>
            <Li>Active Rooms</Li>
            <Li>Inactive Rooms</Li>
          </Ul>
          <Content>
            <table style={{ borderCollapse: 'collapse', width: '100%' }}>
              <thead>
                <tr>
                  <Th>Room</Th>
                  <Th>Bed Type</Th>
                  <Th>Room Floor</Th>
                  <Th>Facilities</Th>
                  <Th>Rate</Th>
                  <Th>Status</Th>
                  <Th>Actions</Th>
                </tr>
              </thead>
              <tbody>
                {rooms.map((room) => (
                  <Tr key={room.id}>
                    <Td>
                      <CardGuest onClick={() => handleShow(room)}>
                        <img src={room.photo} alt={`Room ${room.name}`} />
                        <div style={{ textAlign: 'left' }}>
                          <Name>{room.name}</Name>
                          <ID>#{room.id}</ID>
                        </div>
                      </CardGuest>
                    </Td>
                    <Td>{room.bed_type}</Td>
                    <Td>{room.room_number}</Td>
                    <Td>{room.facilities}</Td>
                    <Td>
                      <Price>{room.price}$<span> /night</span></Price>
                    </Td>
                    <Td>
                      <ButtonStatus status={room.status}>{room.status}</ButtonStatus>
                    </Td>
                    <Td>
                      <FaRegEdit size={30} cursor={'pointer'} onClick={() => handleEdit(room)} />
                      <MdDeleteOutline size={30} style={{ cursor: 'pointer' }} onClick={() => dispatch(deleteRoom(room.id))} />
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
