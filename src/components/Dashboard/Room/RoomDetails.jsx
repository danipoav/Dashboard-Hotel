import React from 'react'
import { useLocation } from 'react-router-dom'
import { Container, Content } from './Room.styles'

export default function RoomDetails() {

    const location = useLocation();
    const room = location.state.room

    return (
        <>
            <Container>
                <Content>
                    <div>{room.name}</div>
                </Content>
            </Container>
        </>
    )
}
