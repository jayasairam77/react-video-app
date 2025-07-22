import { FaMoon } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { FiLogOut } from "react-icons/fi";
import { useContext } from 'react';
import { GoSun } from "react-icons/go";
import { useNavigate } from 'react-router-dom'
import Cookies from 'js-cookie';
import Popup from 'reactjs-popup'
import ThemeContext from '../../Contexts/ThemeContext';
import { NavContainer, Image, NavItemsContainer, NavItemButton, PopupContainer, Heading, BtnContainer, LogoutBtn } from './styledComponents'

const Navbar = ({ onClickOptions }) => {
    const contextValues = useContext(ThemeContext)
    const { darkTheme, toggleDarkTheme } = contextValues

    const navigate = useNavigate()

    const onClickLogout = () => {
        Cookies.remove('jwt_token')
        navigate('/login', { replace: true })
    }

    const renderLogoutPopup = (close) => {
        return (
            <PopupContainer>
                <Heading>Are you sure you want to logout?</Heading>
                <BtnContainer>
                    <LogoutBtn onClick={close}>Cancel</LogoutBtn>
                    <LogoutBtn $confirm onClick={onClickLogout}>Confirm</LogoutBtn>
                </BtnContainer>
            </PopupContainer>
        )
    }

    return (
        <>
            <NavContainer>
                <Image $logo src={darkTheme ? "https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png" : "https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"} />
                <NavItemsContainer>
                    <NavItemButton>
                        {
                            darkTheme ? <GoSun onClick={toggleDarkTheme} size={25} /> : <FaMoon onClick={toggleDarkTheme} size={25} />
                        }
                    </NavItemButton>
                    <NavItemButton $smNavItem >
                        <GiHamburgerMenu onClick={onClickOptions} size={25} />
                    </NavItemButton>
                    <NavItemButton $lgNavItem >
                        <Image src='https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png' alt='profile' />
                    </NavItemButton>

                    <Popup
                        trigger={<NavItemButton $smNavItem onClick={onClickLogout}>
                            <FiLogOut size={25} />
                        </NavItemButton>}
                        modal
                        position={"center center"}
                    >
                        {(close) => renderLogoutPopup(close)}
                    </Popup>

                    <Popup
                        trigger={<NavItemButton $logout $lgNavItem>
                            Logout
                        </NavItemButton>}
                        modal
                        position={"center center"}
                        overlayStyle={{
                            backgroundColor: 'rgba(0, 0, 0, 0.4)',
                            backdropFilter: 'blur(1px)',
                        }}
                    >
                        {(close) => renderLogoutPopup(close)}
                    </Popup>
                </NavItemsContainer>
            </NavContainer>
        </>
    )
}

export default Navbar