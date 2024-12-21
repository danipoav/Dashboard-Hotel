import { useDispatch } from "react-redux";
import { logout } from "../../../store/slices/authSlice";
import { CiMail } from "react-icons/ci";
import { IoIosLogOut } from "react-icons/io";
import { useLocation } from "react-router-dom";
import { NotificationBar, LeftSection, RightSection, TitleTop } from './TopBar.styles'
import { FaBars } from "react-icons/fa";
export default function TopBar() {

    const dispatch = useDispatch();
    const location = useLocation();

    const handleLogOut = () => {
        dispatch(logout())
    }

    const getTitle = (pathname) => {
        switch (pathname) {
            case '/home':
                return 'Dashboard';
            case '/home/room':
                return 'Rooms'
            case '/home/bookings':
                return 'Bookings'
            case '/home/users':
                return 'Users';
            case '/home/contacts':
                return 'Contacts'
            default:
                return 'Dashboard'
        }

    }
    return (
        <NotificationBar>
            <LeftSection>
                <FaBars size={30} />
                <TitleTop>{getTitle(location.pathname)}</TitleTop>
            </LeftSection>

            <RightSection>
                <CiMail size={30} />
                <IoIosLogOut size={30} onClick={handleLogOut} />
            </RightSection>
        </NotificationBar>
    )
}
