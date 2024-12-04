import React, { useState } from 'react'
import { Container, Content, Card, CardGuest, ContainerName, Name, ID, Text, ButtonStatus, Price, ButtonCreate, Ul, Li } from './Room.styles'
import { MdDeleteOutline } from "react-icons/md";
import { room } from '../../../data/room';
import { MdAddCircleOutline } from "react-icons/md";
import Logo from "../../../assets/room_img.jpg"

export default function Room() {

  const [roomData, setRoomData] = useState(room)

  const deleteRoom = (id) => {
    const updateRoom = roomData.filter((room) => room.id !== id)
    setRoomData(updateRoom)
  }
  return (
    <>
      <Container>
        <ButtonCreate>
          New Room<MdAddCircleOutline size={20} />
        </ButtonCreate>
        <Content>
          <Ul>
            <Li style={{ width: '26%' }}>Room Name</Li>
            <Li style={{ width: '13%' }}>Bed Type</Li>
            <Li style={{ width: '16%' }}>Room Floor</Li>
            <Li style={{ width: '16%' }}>Facilities</Li>
            <Li style={{ width: '11%' }}>Rate</Li>
            <Li>Status</Li>
          </Ul>
          {roomData.map((room) => (
            <Card key={room.id}>
              <CardGuest>
                <img src={Logo} alt="Room" />
                <ContainerName>
                  <ID>#{room.id}</ID>
                  <Name>{room.name}</Name>
                </ContainerName>
                <Text>{room.bed_type}</Text>
                <Text>{room.room_number}</Text>
                <Text style={{ width: '250px' }}>{room.Facilities}</Text>
                <Price>{room.Price}$<span> /night</span></Price>
                <ButtonStatus status={room.Status}>{room.Status}</ButtonStatus>
                <MdDeleteOutline size={30} cursor={'pointer'} onClick={() => deleteRoom(room.id)} />
              </CardGuest>
            </Card>
          ))}
        </Content>
      </Container>
    </>
  )
}
