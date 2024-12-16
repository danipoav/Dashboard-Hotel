import { createSlice } from "@reduxjs/toolkit";
import { fetchContacts, fetchContact, unFetchContact, createContact, updatedContact, deleteContact } from "../thunk/contactThunk";

export const contactSlice = createSlice({
    name: 'contacts',
    initialState: {
        contacts: [],
        contact: null
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchContacts.fulfilled, (state, action) => {
                state.contacts = action.payload;
            })
            .addCase(fetchContact.fulfilled, (state, action) => {
                state.contact = action.payload
            })
            .addCase(unFetchContact.fulfilled, (state, action) => {
                state.contact = action.payload
            })
            .addCase(createContact.fulfilled, (state, action) => {
                state.contacts = action.payload
            })
            .addCase(updatedContact.fulfilled, (state, action) => {
                state.contacts = action.payload
            })
            .addCase(deleteContact.fulfilled, (state, action) => {
                state.contacts = action.payload
            })
    }
})

export default contactSlice.reducer;