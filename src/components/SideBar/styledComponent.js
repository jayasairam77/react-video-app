import styled from 'styled-components'
import {NavLink} from 'react-router-dom'

export const SideBarCard = styled.div`
    display: felx;
    height: 100%;
    background-color: ${props => props.theme.darkTheme ? '#2c2c2cff' : '#ffffffff'};
`

export const MainCard = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 8px;
    gap: 12px;
    background-color: ${props => props.theme.darkTheme ? '#2c2c2cff' : '#ffffffff'};
    color: ${props => props.theme.darkTheme ? '#ffffff' : '#000000'};
    @media screen and (min-width: 768px){
        height: calc(100vh - 50px);
    }
`

export const UnorderedList = styled.ul`
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 8px;
    gap: 12px;
    list-style: none;
`

export const ListEle = styled.li`
    display: flex;
    flex-direction: row;
`

export const SubCard = styled(NavLink)`
    display: flex;
    flex-direction: ${props => props.$row ? 'row' : 'column'};
    align-items: center;
    gap: 8px;
    text-decoration: none;
    color: inherit;
    white-space: nowrap;
    &.active{
        color: #ff0000ff;
    }
`

export const IconWrapper = styled.span`
    font-size: 25px;
    display: flex;
    align-items: center;
`

export const Paragraph = styled.p`
    font-size: 1rem;
`

export const Heading = styled.h1`
    font-size: 1rem;
    font-weight: 500;
`

export const ContactUsContainer = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 200px;

    @media screen and (max-width: 767px){
        display: none;
    }
`

export const SocialMediaLogos = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    gap: 12px;
    margin: 18px 0px;
`

export const MediaLogoBtn = styled.button`
    background-color: transparent;
    outline: none;
    border: none;
    width: 30%;
    max-width: 35px;
`

export const Image = styled.img`
    width: 100%;
`