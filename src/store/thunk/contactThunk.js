import { createAsyncThunk } from "@reduxjs/toolkit";
import { v4 as uuid } from "uuid";
import { contact } from '../../data/contact'

export const fetchContacts = createAsyncThunk('contacts/fetchContacts', async () => {
    const local = JSON.parse((localStorage.getItem('contacts')))
    if (local) {
        return local;
    } else {
        localStorage.setItem('contacts', JSON.stringify(contact))
        return contact
    }
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
    const updatedContacts = [...contacts, newContacts]
    localStorage.setItem('contacts', JSON.stringify(updatedContacts))
    return updatedContacts;
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