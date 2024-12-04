import { CiSearch } from "react-icons/ci";
import { CiMail } from "react-icons/ci";
import { IoIosLogOut } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { NotificationBar, LeftSection, CenterSection, RightSection, SearchBar, TitleTop } from './TopBar.styles'
import { FaBars } from "react-icons/fa";
export default function TopBar() {

    const navigate = useNavigate();


    const handleLogOut = () => {
        localStorage.removeItem('isAuth')
        navigate('')
    }
    return (
        <NotificationBar>
            <LeftSection>
                <FaBars size={30} />
                <TitleTop>Dashboard</TitleTop>
            </LeftSection>
            <CenterSection>
                <SearchBar>
                    <input type="text" placeholder="Search..." />
                    <CiSearch size={30} />
                </SearchBar>
            </CenterSection>
            <RightSection>
                <CiMail size={30} />
                <IoIosLogOut size={30} onClick={handleLogOut} />
            </RightSection>
        </NotificationBar>
    )
}
