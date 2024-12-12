import { useLocation } from 'react-router-dom';
import { Container, Content, RoomImage, Title, RoomDetailsList, PriceTag } from '../Room/RoomDetails.styles';

export default function UsersDetails() {
    const location = useLocation();
    const user = location.state.user

    return (
        <>
            <Container>
                <Content>
                    <Title>{user.name}</Title>
                    <RoomImage src={user.image} alt={user.name} />
                    <RoomDetailsList>
                        <li>
                            <strong>Order Date:</strong> {user.order_date}
                        </li>
                        <li>
                            <strong>Check In:</strong> {user.check_in}
                        </li>
                        <li>
                            <strong>Check Out:</strong> {user.check_out}
                        </li>
                        <li>
                            <strong>Room Type:</strong> {user.room_type}
                        </li>
                    </RoomDetailsList>
                </Content>
            </Container>
        </>
    )
}
