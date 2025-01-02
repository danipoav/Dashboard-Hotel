import { useEffect, useState, ChangeEvent, FormEvent } from "react";
import { Container, Content, Title, CreateForm, Label, Input, SubmitButton } from "./UsersCreate.styles";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { unFetchUser, updatedUser, createUser } from "../../../store/thunk/userThunk";
import React from "react";
import { UserTypeID, UserType } from "../../../types/UserType";
import { AppDispatch } from "../../../store/store";

interface RootState {
    users: {
        user: UserTypeID | null;
    }
}

export default function UsersCreate() {
    const user = useSelector((state: RootState) => state.users.user);
    const navigate = useNavigate();
    const dispatch = useDispatch<AppDispatch>();

    const [data, setData] = useState<UserType>({
        name: "",
        photo: "",
        order_date: "",
        check_in: "",
        check_out: "",
        room_type: "",
    });

    useEffect(() => {
        if (user) {
            setData(user);
        } else {
            setData({
                name: "",
                photo: "",
                order_date: "",
                check_in: "",
                check_out: "",
                room_type: "",
            });
        }
    }, [user]);

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setData({ ...data, [name]: value });
    };

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        if (user) {
            const newUser: UserTypeID = { ...data, id: user.id }
            dispatch(updatedUser(newUser));
        } else {
            dispatch(createUser(data));
        }
        navigate('/home/users');
    };

    const handleCancel = () => {
        if (user != null) {
            dispatch(unFetchUser());
        }
        navigate('/home/users');
    };

    return (
        <>
            <Container>
                <Content>
                    <Title>
                        {user ? 'Edit User' : 'Create new User'}
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
                            photo (URL):
                            <Input
                                type="text"
                                name="photo"
                                value={data.photo}
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
                        <SubmitButton onClick={handleCancel} style={{ backgroundColor: 'red' }}>Cancel</SubmitButton>
                        <SubmitButton type="submit">{user ? 'Edit' : 'Create'}</SubmitButton>
                    </CreateForm>
                </Content>
            </Container>
        </>
    );
}
