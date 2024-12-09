import React from 'react'
import { useLocation } from 'react-router-dom'
import { Container, Content, RoomImage, Title, RoomDetailsList, PriceTag } from './RoomDetails.styles';
import styled from 'styled-components';

export default function RoomDetails() {

    const location = useLocation();
    const room = location.state.room

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
                    <PriceTag>${room.Price} / night</PriceTag>
                </Content>
            </Container>
        </>
    )
}
