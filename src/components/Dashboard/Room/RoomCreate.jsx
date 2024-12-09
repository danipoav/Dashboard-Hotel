import { Container, Content, Title, CreateForm, Label, Input, SubmitButton } from "./RoomCreate.styles"
import { useOutletContext, useNavigate } from "react-router-dom"
import { v4 } from "uuid";
import { useState } from "react";

export default function RoomCreate() {

  const navigate = useNavigate();
  const [data, setData] = useState({
    id: v4(),
    name: "",
    image: "",
    order_date: "",
    check_in: "",
    check_out: "",
    room_type: "",
  })

  const handleChange = (e) => {
    console.log(e.target.value)
    setData({ ...data, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    navigate('/home/users')
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
                value={data.name}
                onChange={handleChange}
                required
              />
            </Label>
            <Label>
              Image (URL):
              <Input
                type="text"
                name="image"
                value={data.image}
                onChange={handleChange}
                required
              />
            </Label>
            <Label>
              Order Date:
              <Input
                type="date"
                name="order_date"
                value={data.order_date}
                onChange={handleChange}
                required
              />
            </Label>
            <Label>
              Check-in:
              <Input
                type="date"
                name="check_in"
                value={data.check_in}
                onChange={handleChange}
                required
              />
            </Label>
            <Label>
              Check-out:
              <Input
                type="date"
                name="check_out"
                value={data.check_out}
                onChange={handleChange}
                required
              />
            </Label>
            <Label>
              Type Room:
              <Input
                type="number"
                name="room_type"
                value={data.room_type}
                onChange={handleChange}
                required
              />
            </Label>
            <SubmitButton type="submit">Create</SubmitButton>
          </CreateForm>
        </Content>
      </Container>
    </>
  )
}

