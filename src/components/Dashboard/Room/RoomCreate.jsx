import { Container, Content, Title, CreateForm, Label, Input, SubmitButton } from "./RoomCreate.styles"
import { useNavigate } from "react-router-dom"
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addRoom, editRoom, unsetRoom } from "../../../store/slices/roomSlice";
import { useSelector } from "react-redux";

export default function RoomCreate() {

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const room = useSelector((state) => state.rooms.room)

  const [data, setData] = useState({
    name: "",
    photo: "",
    room_number: "",
    bed_type: "",
    facilities: "",
    status: "",
    price: ""
  })

  useEffect(() => {
    if (room) {
      setData(room);
    } else {
      setData({
        name: "",
        photo: "",
        room_number: "",
        bed_type: "",
        facilities: "",
        status: "",
        price: ""
      });
    }
  }, [room]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (room) {
      dispatch(editRoom(data));
    } else {
      dispatch(addRoom(data));
    }
    navigate('/home/room');
  }

  const handleCancel = () => {
    if (room != null) {
      dispatch(unsetRoom)
      navigate('home/room')
    } else {
      navigate('/home/room')
    }
  }

  return (
    <>
      <Container>
        <Content>
          <Title>
            Create new User
          </Title>
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
    </>
  )
}