import React, { useState } from 'react'
import { FaEnvelope, FaLock } from 'react-icons/fa';
import { Login, DivGroup, Input, Button, Container, Title, Text } from './Login.styles';

export const Form = ({ handleLogin }) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        handleLogin(email, password)
    }
    return (
        <>
            <Container onSubmit={handleSubmit}>
                <Login>
                    <Title>Welcome</Title>
                    <DivGroup>
                        <FaEnvelope />
                        <Input type="text" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    </DivGroup>
                    <DivGroup>
                        <FaLock />
                        <Input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    </DivGroup>
                    <Button type="submit">Login</Button>
                    <Text><strong>Email:</strong> Danipoav</Text>
                    <Text><strong>Password:</strong> admin</Text>
                </Login>
            </Container>
        </>
    )
}
