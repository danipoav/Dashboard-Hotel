import React, { useState, useEffect, ChangeEvent, FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { unFetchBooking, createBooking, editBooking } from '../../../store/thunk/bookingThunk';
import { Container, Content, Title, CreateForm, Label, Input, SubmitButton } from "./BookingForm.styles";
import { AppDispatch } from '../../../store/store';

interface BookingData {
    name: string;
    photo: string;
    check_in: string;
    check_out: string;
    room: string;
    requests: string;
    booking_date: string;
    price: number;
    status: 'Paid' | 'Refunded' | 'Pending';
}

interface Booking extends BookingData {
    id: string;
}

interface RootState {
    bookings: {
        booking: Booking | null;
    };
}


export default function BookingForm() {
    const navigate = useNavigate();
    const dispatch = useDispatch<AppDispatch>();
    const booking = useSelector((state: RootState) => state.bookings.booking);
    const today = new Date().toISOString().split('T')[0];

    const [data, setData] = useState<BookingData>({
        name: "",
        photo: "",
        check_in: "",
        check_out: "",
        room: "",
        requests: "",
        booking_date: today,
        price: 0,
        status: "Paid",
    });

    useEffect(() => {
        if (booking) {
            setData({ ...booking, booking_date: booking.booking_date || today });
        }
    }, [booking, today]);

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setData({ ...data, [name]: value });
    };

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (booking) {
            const updatedBooking: Booking = { ...data, id: booking.id };
            dispatch(editBooking(updatedBooking));
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
