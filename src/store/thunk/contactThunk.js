import { createAsyncThunk } from "@reduxjs/toolkit";

export const fecthContact = createAsyncThunk('contacts/fetchContacts', async () => {
    return JSON.parse(localStorage.getItem('contacts')) || []
})

export const fetchContact = createAsyncThunk('contacts/fetchContact', async (contact) => {
    return contact
})

export const unFetchContact = createAsyncThunk('contacts/unFetchContact', async () => {
    return null
})
export const createContact = createAsyncThunk('contacts/createContact', async (contact) => {
    const contacts = JSON.parse(localStorage.getItem('contacts')) || [];
    const newContacts = { ...contact, id: uuid() }
    const updatedContacs = [...contacts, newContacts]
    localStorage.setItem('contacts', JSON.stringify(updatedContacs))
    return updatedContacs;
})

export const updatedContact = createAsyncThunk('contacts/updateContact', async (contact) => {
    const contacts = JSON.parse(localStorage.getItem('contacts'))
    const updatedContacts = contacts.map((contactMap) =>
        contactMap.id === contact.id ?
            { ...contactMap, ...contact }
            : contactMap
    )
    localStorage.setItem('contacts', JSON.stringify(updatedContacts))
    return updatedContacts
})

export const deleteContact = createAsyncThunk('contacts/delete', async (id) => {
    const contacts = JSON.parse(localStorage.getItem('contacts'))
    const updatedContacts = contacts.filter((contact) => contact.id !== id)
    localStorage.setItem('contacts', JSON.stringify(updatedContacts));
    return updatedContacts
})