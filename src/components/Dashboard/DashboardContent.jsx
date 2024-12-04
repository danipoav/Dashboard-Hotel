import React from 'react'
import { Contentainer, Content, Title, Display, ContainerText, Text, ContainerPerson, Div, ContainerName, Name, Time } from './DashboardContent.styles'
import { IoMdCloseCircleOutline } from "react-icons/io";
import { FaRegCircleCheck } from "react-icons/fa6";

export const DashboardContent = () => {
    return (
        <Contentainer>
            <Content>
                <Title>Latest Review by Customers</Title>
                <Display>
                    <ContainerText>
                        <Text>I have been there many times.Rooms ,Food and Service are excellent.we did lots of Excursions and all the places are from the Hotel reachable. we visited Long Waterfall and was very helpful and excellent</Text>
                        <ContainerPerson>
                            <Div>
                                <img src="https://randomuser.me/api/portraits/women/25.jpg" alt="Random" />
                                <ContainerName>
                                    <Name>Kusnaidi Anderson</Name>
                                    <Time>4m ago</Time>
                                </ContainerName>
                            </Div>
                            <Div>
                                <FaRegCircleCheck color='green' size={25} />
                                <IoMdCloseCircleOutline color='red' size={30} />
                            </Div>
                        </ContainerPerson>
                    </ContainerText>
                    <ContainerText>
                        <Text>I have been there many times.Rooms ,Food and Service are excellent.we did lots of Excursions and all the places are from the Hotel reachable. we visited Long Waterfall and was very helpful and excellent</Text>
                        <ContainerPerson>
                            <Div>
                                <img src="https://randomuser.me/api/portraits/women/25.jpg" alt="Random" />
                                <ContainerName>
                                    <Name>Kusnaidi Anderson</Name>
                                    <Time>4m ago</Time>
                                </ContainerName>
                            </Div>
                            <Div>
                                <FaRegCircleCheck color='green' size={25} />
                                <IoMdCloseCircleOutline color='red' size={30} />
                            </Div>
                        </ContainerPerson>
                    </ContainerText>
                    <ContainerText>
                        <Text>I have been there many times.Rooms ,Food and Service are excellent.we did lots of Excursions and all the places are from the Hotel reachable. we visited Long Waterfall and was very helpful and excellent</Text>
                        <ContainerPerson>
                            <Div>
                                <img src="https://randomuser.me/api/portraits/women/25.jpg" alt="Random" />
                                <ContainerName>
                                    <Name>Kusnaidi Anderson</Name>
                                    <Time>4m ago</Time>
                                </ContainerName>
                            </Div>
                            <Div>
                                <FaRegCircleCheck color='green' size={25} />
                                <IoMdCloseCircleOutline color='red' size={30} />
                            </Div>
                        </ContainerPerson>
                    </ContainerText>
                </Display>
            </Content>
        </Contentainer>
    )
}
