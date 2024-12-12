import { Container, Content, CardGuest, ContainerName, Name, ID, ButtonStatus, Price, ButtonCreate, Tr, Td, Th, Ul, Li } from './Room.styles'
import { MdDeleteOutline } from "react-icons/md";
import { MdAddCircleOutline } from "react-icons/md";
import { useNavigate, Outlet, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { FaRegEdit } from "react-icons/fa";
import { useEffect } from 'react';
import { fetchRooms, deleteRoom, unFetchRoom, fetchRoom } from '../../../store/thunk/roomThunk';

export default function Room() {

  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();
  const rooms = useSelector((state) => state.rooms.rooms);

  useEffect(() => {
    dispatch(fetchRooms())
  }, [dispatch])

  const handleShow = (room) => {
    dispatch(fetchRoom(room))
    navigate(`show/${room.id}`)
  }

  const handleCreate = () => {
    dispatch(unFetchRoom())
    navigate('create')
  }

  const handleEdit = (room) => {
    dispatch(fetchRoom(room))
    navigate('create')
  }

  return (
    <>
      <Outlet />
      {location.pathname === '/home/room' && (
        <Container>
          <ButtonCreate onClick={handleCreate}>
            New Room <MdAddCircleOutline size={20} />
          </ButtonCreate>
          <Ul>
            <Li isActive>All rooms</Li>
            <Li>Active Employee</Li>
            <Li>Unactive Employee</Li>
          </Ul>
          <Content>
            <table style={{ borderCollapse: 'collapse' }}>
              <thead>
                <Tr>
                  <Th>Room Name</Th>
                  <Th>Bed Type</Th>
                  <Th>Room Floor</Th>
                  <Th><div style={{ width: '50%' }}>Facilities</div></Th>
                  <Th>Rate</Th>
                  <Th>Status</Th>
                  <Th>Actions</Th>
                </Tr>
              </thead>
              <tbody>
                {rooms.map((room) => (
                  <Tr key={room.id} style={{ borderBottom: '1px solid #ddd' }}>
                    <Td>
                      <CardGuest onClick={() => handleShow(room)}>
                        <img src={room.photo} alt="Room" />
                        <ContainerName>
                          <ID>#{room.id}</ID>
                          <Name>{room.name}</Name>
                        </ContainerName>
                      </CardGuest>
                    </Td>
                    <Td style={{ marginBottom: '5em' }}>{room.bed_type}</Td>
                    <Td>{room.room_number}</Td>
                    <Td style={{ textAlign: 'start' }}>{room.facilities}</Td>
                    <Td><Price>{room.price}$<span> /night</span></Price></Td>
                    <Td>
                      <ButtonStatus status={room.status}>{room.status}</ButtonStatus>
                    </Td>
                    <Td style={{ textAlign: 'center' }}>
                      <FaRegEdit size={30} cursor={'pointer'} onClick={() => handleEdit(room)} />
                      <MdDeleteOutline size={30} cursor={'pointer'} onClick={() => dispatch(deleteRoom(room.id))} />
                    </Td>
                  </Tr>
                ))}
              </tbody>
            </table>
          </Content>
        </Container>
      )}
    </>
  )
}
