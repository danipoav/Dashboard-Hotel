import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        email: 'user@user.com',
        password: 'user',
        isAuthenticated: JSON.parse(localStorage.getItem('isAuth')) || false
    },
    reducers: {
        login(state, action) {
            if (action.payload.email === state.email && action.payload.password === state.password) {
                state.isAuthenticated = true;
                localStorage.setItem('isAuth', 'true')
            }
        },
        logout(state) {
            state.isAuthenticated = false;
            localStorage.removeItem('isAuth')
        }
    }
})

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;