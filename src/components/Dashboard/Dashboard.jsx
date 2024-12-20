import { useNavigate, useLocation, Outlet } from 'react-router-dom';
import { SlidebarContainer, MenuItem, LogoContainer, UserContainer, Title, Email, ButtonEdit, Input } from './Dashboard.styles';
import { MdOutlineSpaceDashboard } from "react-icons/md";
import { TfiKey } from "react-icons/tfi";
import { IoPersonOutline } from "react-icons/io5";
import { FaRegCalendarCheck } from "react-icons/fa";
import { BsTelephone } from "react-icons/bs";
import { useSelector, useDispatch } from 'react-redux';
import TopBar from './TopBar/TopBar';
import Logo from '../../assets/hotellogo.png';
import { useState } from 'react';
import { updateProfile } from '../../store/slices/authSlice';

export const Dashboard = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const userProfile = useSelector((state) => state.auth.userProfile);
    const dispatch = useDispatch();
    const [isEditing, setIsEditing] = useState(false);
    const [data, setData] = useState({
        name: userProfile.name,
        email: userProfile.email
    });

    const handleEdit = () => setIsEditing(true);

    const handleSave = () => {
        setIsEditing(false);
        dispatch(updateProfile({ name: data.name, email: data.email }));
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setData({ ...data, [name]: value });
    };

    return (
        <>
            <div>
                <SlidebarContainer>
                    <LogoContainer>
                        <img src={Logo} alt="logo" style={{ display: 'flex', justifyContent: 'center', width: '90%' }} />
                    </LogoContainer>
                    <MenuItem
                        active={location.pathname === '/home'}
                        onClick={() => navigate('/home')}
                    >
                        <MdOutlineSpaceDashboard />Dashboard
                    </MenuItem>
                    <MenuItem
                        active={location.pathname === '/home/room'}
                        onClick={() => navigate('/home/room')}
                    >
                        <TfiKey />Room
                    </MenuItem>
                    <MenuItem
                        active={location.pathname === '/home/bookings'}
                        onClick={() => navigate('/home/bookings')}
                    >
                        <FaRegCalendarCheck />Bookings
                    </MenuItem>
                    <MenuItem
                        active={location.pathname === '/home/users'}
                        onClick={() => navigate('/home/users')}
                    >
                        <IoPersonOutline />Users
                    </MenuItem>
                    <MenuItem
                        active={location.pathname === '/home/contacts'}
                        onClick={() => navigate('/home/contacts')}
                    >
                        <BsTelephone />Contact
                    </MenuItem>
                    <UserContainer>
                        <img src="https://randomuser.me/api/portraits/men/6.jpg" alt="Profile" />
                        {isEditing ? (
                            <>
                                <Input type="text" name="name" value={data.name} onChange={handleChange} style={{ fontSize: '0.9em' }} />
                                <Input type="email" name="email" value={data.email} onChange={handleChange} style={{ fontSize: '0.6em' }} />
                            </>
                        ) : (
                            <>
                                <Title>{data.name}</Title>
                                <Email>{data.email}</Email>
                            </>
                        )}
                        <ButtonEdit onClick={isEditing ? handleSave : handleEdit}>
                            {isEditing ? 'Save' : 'Edit'}
                        </ButtonEdit>
                    </UserContainer>
                </SlidebarContainer>
                <TopBar />
                <Outlet />
            </div>
        </>
    );
};
