import { createAsyncThunk } from "@reduxjs/toolkit";
import { v4 as uuid } from "uuid";
import { room as initialRooms } from '../../data/room';
import { RoomType, RoomTypeID } from "../../types/RoomType";

export const fetchRooms = createAsyncThunk<RoomTypeID[]>(
  'rooms/fetchRooms',
  async () => {
    const local = localStorage.getItem('rooms');
    const rooms = local ? JSON.parse(local) as RoomTypeID[] : null;

    if (rooms) {
      return rooms;
    } else {
      localStorage.setItem('rooms', JSON.stringify(initialRooms));
      return initialRooms as RoomTypeID[];
    }
  }
);

export const fetchRoom = createAsyncThunk<RoomTypeID, RoomTypeID>(
  'rooms/fetchRoom',
  async (room) => {
    return room;
  }
);

export const unFetchRoom = createAsyncThunk<null>(
  'rooms/unFetchRoom',
  async () => null
);

export const createRoom = createAsyncThunk<RoomTypeID[], Omit<RoomType, 'id'>>(
  'rooms/createRoom',
  async (room) => {
    const rooms = JSON.parse(localStorage.getItem('rooms') || '[]') as RoomTypeID[];
    const newRoom: RoomTypeID = { ...room, id: uuid() };
    const updatedRooms = [...rooms, newRoom];
    localStorage.setItem('rooms', JSON.stringify(updatedRooms));
    return updatedRooms;
  }
);

export const updatedRoom = createAsyncThunk<RoomTypeID[], RoomTypeID>(
  'rooms/updateRoom',
  async (room) => {
    const rooms: RoomTypeID[] = JSON.parse(localStorage.getItem('rooms') || '[]');
    const updatedRooms = rooms.map((existingRoom) =>
      existingRoom.id === room.id
        ? { ...existingRoom, ...room }
        : existingRoom
    );
    localStorage.setItem('rooms', JSON.stringify(updatedRooms));
    return updatedRooms;
  }
);

export const deleteRoom = createAsyncThunk<RoomTypeID[], string>(
  'rooms/delete',
  async (id) => {
    const rooms = JSON.parse(localStorage.getItem('rooms') || '[]') as RoomTypeID[];
    const updatedRooms = rooms.filter((room) => room.id !== id);
    localStorage.setItem('rooms', JSON.stringify(updatedRooms));
    return updatedRooms;
  }
);
