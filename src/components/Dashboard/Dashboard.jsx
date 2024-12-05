import { useNavigate, Outlet } from 'react-router-dom';
import { SlidebarContainer, MenuItem, LogoContainer, Title, Subtitle } from './Dashboard.styles'
import { FaHotel } from "react-icons/fa";
import { MdOutlineSpaceDashboard } from "react-icons/md";
import { TfiKey } from "react-icons/tfi";
import { IoPersonOutline } from "react-icons/io5";
import { FaRegCalendarCheck } from "react-icons/fa";
import { IoExtensionPuzzleOutline } from "react-icons/io5";
import TopBar from './TopBar/TopBar';


export const Dashboard = () => {

    const navigate = useNavigate();

    return (
        <>
            <div>
                <SlidebarContainer>
                    <LogoContainer>
                        <FaHotel size={40} />
                        <div>
                            <Title>travl</Title>
                            <Subtitle>Hotel Admin Dashboard</Subtitle>
                        </div>
                    </LogoContainer>
                    <MenuItem onClick={() => navigate('/home')}> <MdOutlineSpaceDashboard />Dashboard</MenuItem>
                    <MenuItem onClick={() => navigate('/home/room')}> <TfiKey />Room</MenuItem>
                    <MenuItem onClick={() => navigate('/home/bookings')}> <FaRegCalendarCheck />Bookings</MenuItem>
                    <MenuItem onClick={() => navigate('/home/users')}> <IoPersonOutline />Users</MenuItem>
                    <MenuItem> <IoExtensionPuzzleOutline />Concierge</MenuItem>
                </SlidebarContainer>

                <TopBar />

                <Outlet />
            </div>
        </>
    )
}
