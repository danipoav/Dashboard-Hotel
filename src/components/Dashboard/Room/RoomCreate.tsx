import { Container, Content, Title, CreateForm, Label, Input, SubmitButton } from "./RoomCreate.styles";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { unFetchRoom, updatedRoom, createRoom } from "../../../store/thunk/roomThunk";
import { RoomType, RoomTypeID } from "../../../types/RoomType";
import { AppDispatch } from "../../../store/store";
import React from "react";

interface RootState {
  rooms: {
    room: RoomTypeID | null;
  };
}

export default function RoomCreate() {

  const initialData = {
    name: "",
    photo: "",
    room_number: "",
    bed_type: "",
    facilities: "",
    status: "",
    price: 0
  }
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const room = useSelector((state: RootState) => state.rooms.room);

  const [data, setData] = useState<RoomType>({
    name: "",
    photo: "",
    room_number: "",
    bed_type: "",
    facilities: "",
    status: "",
    price: 0
  });

  useEffect(() => {
    if (room) {
      setData(room);
    }
  }, [room]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (room) {
      const newRoom: RoomTypeID = { ...data, id: room.id }
      dispatch(updatedRoom(newRoom));
    } else {
      dispatch(createRoom(data));
    }
    navigate('/home/room');
  };

  const handleCancel = () => {
    if (room != null) {
      dispatch(unFetchRoom());
    }
    navigate('/home/room');
  };

  return (
    <Container>
      <Content>
        <Title>{room ? 'Edit Room' : 'Create new Room'}</Title>
        <CreateForm onSubmit={handleSubmit}>
          <Label>
            Name:
            <Input
              type="text"
              name="name"
              required
              onChange={handleChange}
              value={data.name}
            />
          </Label>
          <Label>
            Image (URL):
            <Input
              type="text"
              name="photo"
              required
              onChange={handleChange}
              value={data.photo}
            />
          </Label>
          <Label>
            Room number:
            <Input
              type="text"
              name="room_number"
              required
              onChange={handleChange}
              value={data.room_number}
            />
          </Label>
          <Label>
            Bed type:
            <Input
              type="text"
              name="bed_type"
              required
              onChange={handleChange}
              value={data.bed_type}
            />
          </Label>
          <Label>
            Facilities:
            <Input
              type="text"
              name="facilities"
              required
              onChange={handleChange}
              value={data.facilities}
            />
          </Label>
          <Label>
            Status:
            <Input
              type="text"
              name="status"
              required
              onChange={handleChange}
              value={data.status}
            />
          </Label>
          <Label>
            Price:
            <Input
              type="number"
              name="price"
              required
              onChange={handleChange}
              value={data.price}
            />
          </Label>
          <SubmitButton onClick={handleCancel} style={{ backgroundColor: 'red' }}>Cancel</SubmitButton>
          <SubmitButton type="submit">{room ? 'Edit' : 'Create'}</SubmitButton>
        </CreateForm>
      </Content>
    </Container>
  );
}
