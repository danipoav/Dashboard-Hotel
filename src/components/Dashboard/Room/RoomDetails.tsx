import React from 'react';
import { useSelector } from 'react-redux';
import { Container, Content, LeftSection, RightSection, RoomImage, Title, RoomDetailsList, PriceTag } from './RoomDetails.styles';
import { RoomTypeID } from '../../../types/RoomType';

interface RootState {
    rooms: {
        room: RoomTypeID
    }
}

export default function RoomDetails() {

    const room = useSelector((state: RootState) => state.rooms.room)

    return (
        <Container>
            <Content>
                <LeftSection>
                    <RoomImage src={room.photo} alt={room.name} />
                </LeftSection>
                <RightSection>
                    <Title>{room.name}</Title>
                    <RoomDetailsList>
                        <li>
                            <strong>Room Number:</strong> {room.room_number}
                        </li>
                        <li>
                            <strong>Bed Type:</strong> {room.bed_type}
                        </li>
                        <li>
                            <strong>Facilities:</strong> {room.facilities}
                        </li>
                        <li>
                            <strong>Status:</strong> {room.status}
                        </li>
                    </RoomDetailsList>
                    <PriceTag>${room.price} / night</PriceTag>
                </RightSection>
            </Content>
        </Container>
    );
}
