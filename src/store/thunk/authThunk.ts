import { createAsyncThunk } from "@reduxjs/toolkit";

const url = 'http://localhost:3000/api/auth'

export const getToken = createAsyncThunk<string, { username: string; password: string }>(
    'api/auth', async ({ username, password }) => {
        try {
            const response = await fetch('http://localhost:3000/api/auth', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    "username": username,
                    "password": password
                }),
            });

            if (response.ok) {
                const token = await response.json();
                localStorage.setItem('isAuth', JSON.stringify(true));
                localStorage.setItem('token', token);
                return token;
            } else {
                localStorage.setItem('isAuth', JSON.stringify(false));
                localStorage.setItem('token', JSON.stringify(null));
                throw new Error('Credenciales incorrectas o error en la API');
            }

        } catch (error) {
            throw new Error(error.message || 'Error al autenticar');
        }
    }
);
