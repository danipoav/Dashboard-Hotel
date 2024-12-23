import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { unFetchBooking, createBooking, editBooking } from '../../../store/thunk/bookingThunk'
import { Container, Content, Title, CreateForm, Label, Input, SubmitButton } from "./BookingForm.styles"
import { useState, useEffect } from 'react';

export default function BookingForm() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const booking = useSelector((state) => state.bookings.booking);
    const today = new Date().toISOString().split('T')[0];

    const [data, setData] = useState({
        name: "",
        photo: "",
        check_in: "",
        check_out: "",
        room: "",
        requests: "",
        booking_date: today,
        price: "",
        status: "Paid",
    });

    useEffect(() => {
        if (booking) {
            setData({ ...booking, booking_date: booking.booking_date || today });
        }
    }, [booking]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setData({ ...data, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (booking) {
            dispatch(editBooking(data));
        } else {
            dispatch(createBooking(data));
        }
        navigate('/home/bookings');
    };

    const handleCancel = () => {
        if (booking != null) {
            dispatch(unFetchBooking());
        }
        navigate('/home/bookings');
    };

    return (
        <Container>
            <Content>
                <Title>{booking ? 'Edit Booking' : 'Create New Booking'}</Title>
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
                        Check In:
                        <Input
                            type="date"
                            name="check_in"
                            required
                            onChange={handleChange}
                            value={data.check_in}
                        />
                    </Label>
                    <Label>
                        Check Out:
                        <Input
                            type="date"
                            name="check_out"
                            required
                            onChange={handleChange}
                            value={data.check_out}
                        />
                    </Label>
                    <Label>
                        Requests:
                        <Input
                            type="text"
                            name="requests"
                            required
                            onChange={handleChange}
                            value={data.requests}
                        />
                    </Label>
                    <Label>
                        Room:
                        <Input
                            type="number"
                            name="room"
                            required
                            onChange={handleChange}
                            value={data.room}
                        />
                    </Label>
                    <Label>
                        Total Price:
                        <Input
                            type="number"
                            name="price"
                            required
                            onChange={handleChange}
                            value={data.price}
                        />
                    </Label>
                    <Label>
                        Status:
                        <select
                            name="status"
                            id="status"
                            value={data.status}
                            onChange={handleChange}
                        >
                            <option key="Refunded" value="Refunded">Refunded</option>
                            <option key="Paid" value="Paid">Paid</option>
                            <option key="Pending" value="Pending">Pending</option>
                        </select>
                    </Label>
                    <SubmitButton onClick={handleCancel} style={{ backgroundColor: 'red' }}>
                        Cancel
                    </SubmitButton>
                    <SubmitButton type="submit">{booking ? 'Edit' : 'Create'}</SubmitButton>
                </CreateForm>
            </Content>
        </Container>
    );
}

