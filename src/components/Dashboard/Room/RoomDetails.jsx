import React from 'react'
import { useSelector } from 'react-redux';
import { Container, Content, RoomImage, Title, RoomDetailsList, PriceTag } from './RoomDetails.styles';

export default function RoomDetails() {

    const room = useSelector((state) => state.rooms.room)
    
    return (
        <>
            <Container>
                <Content>
                    <Title>{room.name}</Title>
                    <RoomImage src={room.photo} alt={room.name} />
                    <RoomDetailsList>
                        <li>
                            <strong>Room Number:</strong> {room.room_number}
                        </li>
                        <li>
                            <strong>Bed Type:</strong> {room.bed_type}
                        </li>
                        <li>
                            <strong>Facilities:</strong> {room.Facilities}
                        </li>
                        <li>
                            <strong>Status:</strong> {room.Status}
                        </li>
                    </RoomDetailsList>
                    <PriceTag>${room.price} / night</PriceTag>
                </Content>
            </Container>
        </>
    )
}
