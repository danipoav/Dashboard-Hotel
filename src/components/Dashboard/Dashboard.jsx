import { useNavigate, Outlet } from 'react-router-dom';
import { SlidebarContainer, MenuItem, LogoContainer} from './Dashboard.styles'
import { MdOutlineSpaceDashboard } from "react-icons/md";
import { TfiKey } from "react-icons/tfi";
import { IoPersonOutline } from "react-icons/io5";
import { FaRegCalendarCheck } from "react-icons/fa";
import { IoExtensionPuzzleOutline } from "react-icons/io5";
import TopBar from './TopBar/TopBar';
import Logo from '../../assets/hotellogo.png'



export const Dashboard = () => {

    const navigate = useNavigate();

    return (
        <>
            <div>
                <SlidebarContainer>
                    <LogoContainer>
                        <img src={Logo} alt="logo" style={{ display:'flex', justifyContent:'center', width:'90%' }} />
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
