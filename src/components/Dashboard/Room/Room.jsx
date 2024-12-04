import React from 'react'
import { Container, Content, Check, Card, CardGuest, ContainerName, Name, ID, Text, ButtonNotes, ButtonRefund } from './Room.styles'
import { guest } from '../../../data/guest'

export default function Room() {
  return (
    <>
      <Container>
        <Content>
          {guest.map((user) => (
            <Card key={user.id}>
              <CardGuest>
                <Check />
                <img src={user.image} alt="Random" />
                <ContainerName>
                  <Name>{user.name}</Name>
                  <ID>#{user.id}</ID>
                </ContainerName>
                <Text>{user.order_date} 09:21 AM</Text>
                <ContainerName>
                  <Text>{user.check_in}</Text>
                  <ID>9.46 PM</ID>
                </ContainerName>
                <ContainerName>
                  <Text>{user.check_out}</Text>
                  <ID>6.12 PM</ID>
                </ContainerName>
                <ButtonNotes>View Notes</ButtonNotes>
                <Text>Deluxe A - 02</Text>
                <ButtonRefund>Refund</ButtonRefund>
              </CardGuest>
            </Card>
          ))}
        </Content>
      </Container>
    </>
  )
}
