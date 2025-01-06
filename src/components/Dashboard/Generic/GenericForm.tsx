import React, { useEffect, useState } from 'react'
import { Container, Content, Title, CreateForm, Label, Input, SubmitButton } from "../Room/RoomCreate.styles";

export default function GenericForm({ title, initialData, onSubmit, onCancel, fields }) {

  const [data, setData] = useState(initialData)

  useEffect(() => {
    setData(initialData)
  }, [initialData])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(data)
  }

  return (
    <>
      <Container>
        <Content>
          <Title></Title>
        </Content>
      </Container>
    </>
  )
}
