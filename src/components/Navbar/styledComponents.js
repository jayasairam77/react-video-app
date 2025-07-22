import styled from 'styled-components'

export const NavContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    ${props => !props.$smTopBar && 'height: 50px;'}
    padding: 12px 8px;
    background-color: ${props => (props.theme.darkTheme ? '#3e3e3eff' : '#ffffff')};
    @media screen and (min-width: 768px) {
        display: ${props => props.$smTopBar ? 'none' : 'flex'};
    }
`

export const Image = styled.img`
    width: ${props => props.$logo ? '125px' : '25px'};
    height: 25px;
`

export const NavItemsContainer = styled.div`
    display: flex;
    gap: 15px;
`

export const NavItemButton = styled.button`
    background-color: transparent;
    padding: ${props => props.$logout ? '5px 12px' : ''};
    font-weight: 700;
    border-radius: 5px;
    align-self: center;
    border: ${props => props.$logout ? props.theme.darkTheme ? '1.5px solid #ffffff' : '1.5px solid #000000' : 'none'};
    outline: none;
    color: ${props => (props.theme.darkTheme ? '#ffffff' : '#000000')};
    @media screen and (min-width: 768px) {
        display: ${props => props.$smNavItem ? 'none':'flex'};
    }

    @media screen and (max-width: 767px) {
        display: ${props => props.$lgNavItem ? 'none' : 'flex'};
    }
`;

export const PopupContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    width: 300px;
    text-align: center;
    height: 150px;
    background-color: ${props => props.theme.darkTheme ? '#181818ff' : '#ffffff'};
    color: ${props => props.theme.darkTheme ? '#fdfafaff' : '#0c0c0cff'};
`

export const Heading = styled.h1`
    font-size: 1rem;
`

export const BtnContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    width: 100%;
`

export const LogoutBtn = styled.button`
    border: ${props => props.$confirm ? 'none' : '1px solid black'};
    outline: none;
    color: ${props => props.$confirm ? '#ffffff' : '#808080ff'};
    background-color: ${props => props.$confirm ? '#3e6bddff' : '#fefefeff'};
    width: 100px;
    height: 40px;
`