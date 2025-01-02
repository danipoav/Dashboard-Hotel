import { createAsyncThunk } from "@reduxjs/toolkit";
import { v4 as uuid } from "uuid";
import { contact as initialContacts } from '../../data/contact';

type Day = "Monday" | "Tuesday" | "Wednesday" | "Thursday" | "Friday" | "Saturday" | "Sunday";

export interface Contact {
  name: string;
    id: string;
    join_date: string;
    job_desc: string;
    phone: string;
    status: "active" | "inactive";
    days: Day[];
    photo: string;
}

export const fetchContacts = createAsyncThunk<Contact[]>(
  'contacts/fetchContacts',
  async () => {
  const local = localStorage.getItem('contacts');
  const contacts = local ? JSON.parse(local) as Contact[] : null;

  if (contacts) {
    return contacts;
  } else {
    localStorage.setItem('contacts', JSON.stringify(initialContacts));
    return initialContacts;
  }
});

export const fetchContact = createAsyncThunk<Contact, Contact>(
  'contacts/fetchContact',
  async (contact) => contact
);

export const unFetchContact = createAsyncThunk<null>('contacts/unFetchContact', async () => null);

export const createContact = createAsyncThunk<Contact[], Omit<Contact, 'id'>>(
  'contacts/createContact',
  async (contact) => {
    const contacts = JSON.parse(localStorage.getItem('contacts') || '[]') as Contact[];
    const newContact = { ...contact, id: uuid() };
    const updatedContacts = [...contacts, newContact];
    localStorage.setItem('contacts', JSON.stringify(updatedContacts));
    return updatedContacts;
  }
);

export const updatedContact = createAsyncThunk<Contact[], Contact>(
  'contacts/updateContact',
  async (contact) => {
    const contacts = JSON.parse(localStorage.getItem('contacts') || '[]') as Contact[];
    const updatedContacts = contacts.map((existingContact) =>
      existingContact.id === contact.id
        ? { ...existingContact, ...contact }
        : existingContact
    );
    localStorage.setItem('contacts', JSON.stringify(updatedContacts));
    return updatedContacts;
  }
);

export const deleteContact = createAsyncThunk<Contact[], string>(
  'contacts/delete',
  async (id) => {
    const contacts = JSON.parse(localStorage.getItem('contacts') || '[]') as Contact[];
    const updatedContacts = contacts.filter((contact) => contact.id !== id);
    localStorage.setItem('contacts', JSON.stringify(updatedContacts));
    return updatedContacts;
  }
);
