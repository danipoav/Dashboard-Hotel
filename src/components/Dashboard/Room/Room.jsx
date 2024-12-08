import React, { useState } from 'react'
import { Container, Content, CardGuest, ContainerName, Name, ID, ButtonStatus, Price, ButtonCreate, Tr, Td, Th } from './Room.styles'
import { MdDeleteOutline } from "react-icons/md";
import { room } from '../../../data/room';
import { MdAddCircleOutline } from "react-icons/md";
import { useNavigate, Outlet, useLocation } from 'react-router-dom';

export default function Room() {

  const [roomData, setRoomData] = useState(room)
  const navigate = useNavigate();
  const location = useLocation()

  const deleteRoom = (id) => {
    const updateRoom = roomData.filter((room) => room.id !== id)
    setRoomData(updateRoom)
  }

  const handleShow = (room) => {
    navigate(`show/${room.id}`, { state: { room } })
  }

  const handleCreate = () => {
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
                {roomData.map((room) => (
                  <Tr key={room.id} style={{ borderBottom: '1px solid #ddd' }}>
                    <Td >
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
                    <Td style={{ textAlign: 'start' }}>{room.Facilities}</Td>
                    <Td><Price>{room.Price}$<span> /night</span></Price></Td>
                    <Td>
                      <ButtonStatus status={room.Status}>{room.Status}</ButtonStatus>
                    </Td>
                    <Td style={{ textAlign: 'center' }}>
                      <MdDeleteOutline size={30} cursor={'pointer'} onClick={() => deleteRoom(room.id)} />
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
