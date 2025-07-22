import styled from "styled-components"
import { Link } from "react-router-dom"

export const ListItem = styled.li`
    text-decoration: none;
    color: inherit;
    display: flex;
    flex-direction: ${props => props.$row ? 'row' : 'column'};
    flex-grow: 1;
    gap: 8px;

    @media screen and (min-width: 768px){
        ${props => props.varient === 'home' && `width: 32%;`}
    }
`

export const LinkEle = styled(Link)`
    text-decoration: none;
    color: inherit;
`

export const SubListItem = styled.li`
        list-style-type: ${props => props.$normal ? 'none' : 'disc'};
        margin-left: ${props => props.$normal ? '0px' : '20px'};
` 

export const Image = styled.img`
        ${props => (props.varient === 'trending' || props.varient === 'saved-video') && props.$profile && `display: none;`}
        ${props => props.$thumbnail && `width: 100%;`}
        ${props => props.$profile && `
            width: 40px;
            height: 40px;
        `}
        
        @media screen and (min-width: 576px){
            ${props => props.$thumbnail && (props.varient === 'trending' || props.varient === 'saved-video') && `min-width: 400px; width: 40%; height: 200px;`}
        }
`

export const Card = styled.div`
    display: flex;
    flex-direction: ${props => props.$row ? 'row' : 'column'};
    gap: 12px;
    @media screen and (min-width: 576px){
        ${props => (props.varient === 'trending' || props.varient === 'saved-video') && `flex-direction: row;`}
    }
`

export const UnorderedList = styled.ul`
    display: flex;
    flex-wrap: wrap;
    width: 100%;
`

export const Heading = styled.h1`
    font-size: 1rem;
    font-weight: 500;
`

export const Paragraph = styled.p`
    font-size: 1rem;
    flex-grow: 1;
`