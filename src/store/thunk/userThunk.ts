import { createAsyncThunk } from "@reduxjs/toolkit";
import { v4 as uuid } from "uuid";
import { guest } from '../../data/guest';
import { UserType, UserTypeID } from "../../types/UserType";

export const fetchUsers = createAsyncThunk<UserTypeID[]>('users/fetchUsers', async () => {
  const local = JSON.parse(localStorage.getItem('users') || '[]') as UserTypeID[];
  if (local.length) {
    return local;
  } else {
    localStorage.setItem('users', JSON.stringify(guest));
    return guest;
  }
});

export const fetchUser = createAsyncThunk<UserTypeID, UserTypeID>('users/fetchUser', async (user: UserTypeID) => {
  return user;
});

export const unFetchUser = createAsyncThunk<null>('users/unFetchUser', async () => {
  return null;
});

export const createUser = createAsyncThunk<UserTypeID[], Omit<UserType, 'id'>>('users/createUser', async (user: Omit<UserType, 'id'>) => {
  const users = JSON.parse(localStorage.getItem('users') || '[]') as UserTypeID[];
  const newUser: UserTypeID = { ...user, id: uuid() };
  const updatedUsers = [...users, newUser];
  localStorage.setItem('users', JSON.stringify(updatedUsers));
  return updatedUsers;
});

export const updatedUser = createAsyncThunk<UserTypeID[], UserTypeID>('users/updateUser', async (user: UserTypeID) => {
  const users: UserTypeID[] = JSON.parse(localStorage.getItem('users') || '[]');
  const updatedUsers = users.map((userMap) =>
    userMap.id === user.id ? { ...userMap, ...user } : userMap
  );
  localStorage.setItem('users', JSON.stringify(updatedUsers));
  return updatedUsers;
});

export const deleteUser = createAsyncThunk<UserTypeID[], string>('users/delete', async (id: string) => {
  const users: UserTypeID[] = JSON.parse(localStorage.getItem('users') || '[]');
  const updatedUsers = users.filter((user) => user.id !== id);
  localStorage.setItem('users', JSON.stringify(updatedUsers));
  return updatedUsers;
});
