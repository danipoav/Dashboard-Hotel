import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        emailAuth: 'user@user.com',
        password: 'user',
        isAuthenticated: JSON.parse(localStorage.getItem('isAuth')) || false,
        userProfile: JSON.parse(localStorage.getItem('userProfile')) || {
            name: 'Daniel',
            email: 'dapoav2002gmail.com'
        }
    },
    reducers: {
        login(state, action) {
            if (action.payload.email === state.emailAuth && action.payload.password === state.password) {
                state.isAuthenticated = true;
                localStorage.setItem('isAuth', 'true')
            }
        },
        logout(state) {
            state.isAuthenticated = false;
            localStorage.removeItem('isAuth')
        },
        updateProfile(state, action) {
            const { name, email } = action.payload;
            state.userProfile.name = name;
            state.userProfile.email = email;
            localStorage.setItem('userProfile', JSON.stringify(state.userProfile));
        }
    }
})

export const { login, logout, updateProfile } = authSlice.actions;
export default authSlice.reducer;