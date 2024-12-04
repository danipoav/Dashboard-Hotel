import React from 'react'
import { Container, Content, Check, Card, CardGuest, ContainerName, Name, ID, Text, ButtonNotes, ButtonRefund } from './Room.styles'


export default function Room() {
  return (
    <>
      <Container>
        <Content>
          <Card>
            <Check />
            <CardGuest>
              <img src="https://randomuser.me/api/portraits/women/25.jpg" alt="Random" />
              <ContainerName>
                <Name>Cahyadi Purnomo</Name>
                <ID>#000123456</ID>
              </ContainerName>
              <Text>Oct 30th 2020 09:21 AM</Text>
              <ContainerName>
                <Text>Nov 2th, 2020</Text>
                <ID>9.46 PM</ID>
              </ContainerName>
              <ContainerName>
                <Text>Nov 4th, 2020</Text>
                <ID>6.12 PM</ID>
              </ContainerName>
              <ButtonNotes>View Notes</ButtonNotes>
              <Text>Deluxe A - 02</Text>
              <ButtonRefund>Refund</ButtonRefund>
            </CardGuest>
          </Card>
          <Card>
            <Check />
            <CardGuest>
              <img src="https://randomuser.me/api/portraits/women/25.jpg" alt="Random" />
              <ContainerName>
                <Name>Cahyadi Purnomo</Name>
                <ID>#000123456</ID>
              </ContainerName>
              <Text>Oct 30th 2020 09:21 AM</Text>
              <ContainerName>
                <Text>Nov 2th, 2020</Text>
                <ID>9.46 PM</ID>
              </ContainerName>
              <ContainerName>
                <Text>Nov 4th, 2020</Text>
                <ID>6.12 PM</ID>
              </ContainerName>
              <ButtonNotes>View Notes</ButtonNotes>
              <Text>Deluxe A - 02</Text>
              <ButtonRefund>Refund</ButtonRefund>
            </CardGuest>
          </Card>
        </Content>
      </Container>
    </>
  )
}
