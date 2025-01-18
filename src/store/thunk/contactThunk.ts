import { createAsyncThunk } from "@reduxjs/toolkit";
import { v4 as uuid } from "uuid";
import { contact as initialContacts } from '../../data/contact';
import { ContactType, ContactTypeID } from "../../types/ContactType";
import fetchAPI from "../../components/Fetch/fetchAPI";

export const fetchContacts = createAsyncThunk<ContactTypeID[]>(
  'contacts/fetchContacts',
  async () => {
    try {
      const contacts = fetchAPI('contacts', {
          method: 'GET'
      })
      if (contacts) {
          console.log(contacts);
          return contacts;
      } else {
          throw new Error('Error getting all contacts')
      }

  } catch (error) {
      console.log(error.message || 'Error getting all contacts')
      throw error;
  }
  });

export const fetchContact = createAsyncThunk<ContactTypeID, ContactTypeID>(
  'contacts/fetchContact',
  async (contact) =>{
    return contact;
  }
);

export const unFetchContact = createAsyncThunk<null>('contacts/unFetchContact', async () => null);

export const createContact = createAsyncThunk<ContactTypeID[], Omit<ContactType, 'id'>>(
  'contacts/createContact',
  async (contact) => {
    const contacts = JSON.parse(localStorage.getItem('contacts') || '[]') as ContactTypeID[];
    const newContact = { ...contact, id: uuid() };
    const updatedContacts = [...contacts, newContact];
    localStorage.setItem('contacts', JSON.stringify(updatedContacts));
    return updatedContacts;
  }
);

export const updatedContact = createAsyncThunk<ContactTypeID[], ContactTypeID>(
  'contacts/updateContact',
  async (contact) => {
    const contacts: ContactTypeID[] = JSON.parse(localStorage.getItem('contacts') || '[]');
    const updatedContacts = contacts.map((existingContact) =>
      existingContact.id === contact.id
        ? { ...existingContact, ...contact }
        : existingContact
    );
    localStorage.setItem('contacts', JSON.stringify(updatedContacts));
    return updatedContacts;
  }
);

export const deleteContact = createAsyncThunk<ContactTypeID[], string>(
  'contacts/delete',
  async (id) => {
    const contacts = JSON.parse(localStorage.getItem('contacts') || '[]') as ContactTypeID[];
    const updatedContacts = contacts.filter((contact) => contact.id !== id);
    localStorage.setItem('contacts', JSON.stringify(updatedContacts));
    return updatedContacts;
  }
);
