import { Container, Content, Title, CreateForm, Label, Input, SubmitButton } from "./ContactCreate.styles"
import { useNavigate } from "react-router-dom"
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { unFetchContact, updatedContact, createContact } from '../../../store/thunk/contactThunk'
import { useSelector } from "react-redux";

export default function ContactCreate() {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const contact = useSelector((state) => state.contacts.contact)

    const [data, setData] = useState({
        name: "",
        join_date: "",
        job_desc: "",
        phone: "",
        status: "",
        days: ["Monday", "Sunday"],
        photo: ""
    })

    useEffect(() => {
        if (contact) {
            setData(contact);
        } else {
            setData({
                name: "",
                join_date: "",
                job_desc: "",
                phone: "",
                status: "",
                days: ["Monday", "Sunday"],
                photo: ""
            });
        }
    }, [contact]);

    const handleChange = (e) => {
        const { name, value } = e.target;

        if (name === 'day1' || name === 'day2') {
            const index = name === 'day1' ? 0 : 1
            const updatedDays = [...data.days]
            updatedDays[index] = value;
            setData({ ...data, days: updatedDays })
        } else {
            setData({ ...data, [name]: value })
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (contact) {
            dispatch(updatedContact(data));
        } else {
            dispatch(createContact(data));
        }
        navigate('/home/contacts');
    }

    const handleCancel = () => {
        if (contact != null) {
            dispatch(unFetchContact())
            navigate('home/contacts')
        } else {
            navigate('/home/contacts')
        }
    }

    return (
        <>
            <Container>
                <Content>
                    <Title>
                        {contact ? 'Edit Room' : 'Create new Room'}
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
                            Job Desk:
                            <Input
                                type="text"
                                name="job_desc"
                                required
                                onChange={handleChange}
                                value={data.job_desc}
                            />
                        </Label>
                        <Label>
                            Join Date:
                            <Input
                                type="date"
                                name="join_date"
                                required
                                onChange={handleChange}
                                value={data.join_date}
                            />
                        </Label>
                        <Label>
                            Phone:
                            <Input
                                type="number"
                                name="phone"
                                required
                                onChange={handleChange}
                                value={data.phone}
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
                            Days:
                            <select id="day1" name="day1" value={data.days[0]} onChange={handleChange}>
                                <option value="Monday" >Monday</option>
                                <option value="Tuesday">Tuesday</option>
                                <option value="Wednesday">Wednesday</option>
                                <option value="Thursday">Thursday</option>
                                <option value="Friday">Friday</option>
                                <option value="Saturday">Saturday</option>
                                <option value="Sunday">Sunday</option>
                            </select>
                            <select id="day2" name="day2" value={data.days[1]} onChange={handleChange}>
                                <option value="Monday">Monday</option>
                                <option value="Tuesday">Tuesday</option>
                                <option value="Wednesday">Wednesday</option>
                                <option value="Thursday">Thursday</option>
                                <option value="Friday">Friday</option>
                                <option value="Saturday">Saturday</option>
                                <option value="Sunday" >Sunday</option>
                            </select>
                        </Label>
                        <SubmitButton onClick={handleCancel} style={{ backgroundColor: 'red' }}>Cancel</SubmitButton>
                        <SubmitButton type="submit">{contact ? 'Edit' : 'Create'}</SubmitButton>
                    </CreateForm>
                </Content>
            </Container>
        </>
    )
}