import { createAsyncThunk } from "@reduxjs/toolkit";
import fetchAPI from "../../components/Fetch/fetchAPI";

export const getToken = createAsyncThunk<string, { username: string; password: string }>(
    'api/getToken', async ({ username, password }) => {
        try {
            const token = await fetchAPI('auth', {
                method: 'POST',
                body: JSON.stringify({
                    "username": username,
                    "password": password
                })
            })
            console.log(token)
            if (token) {
                localStorage.setItem('isAuth', JSON.stringify(true));
                localStorage.setItem('token', token);
                return token;
            } else {
                localStorage.setItem('isAuth', JSON.stringify(false));
                localStorage.removeItem('token');
                throw new Error('Credenciales incorrectas o error en la API');
            }

        } catch (error) {
            localStorage.setItem('isAuth', JSON.stringify(false));
            localStorage.removeItem('token');
            throw new Error(error.message || 'Error al autenticar');
        }
    }
);
