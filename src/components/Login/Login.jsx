import React from 'react'
import { FaEnvelope, FaLock } from 'react-icons/fa';
import { Login, DivGroup, Input, Button, Container, Title, Text } from './Login.styles';

export const Form = () => {
    return (
        <>
            <Container>
                <Login>
                    <Title>Welcome</Title>
                    <DivGroup>
                        <FaEnvelope />
                        <Input type="text" placeholder="Email" />
                    </DivGroup>
                    <DivGroup>
                        <FaLock />
                        <Input type="password" placeholder="Password" />
                    </DivGroup>
                    <Button type="submit">Login</Button>
                    <Text><strong>Email:</strong> user@user.com</Text>
                    <Text><strong>Password:</strong> user</Text>
                </Login>

            </Container>


        </>
    )
}
