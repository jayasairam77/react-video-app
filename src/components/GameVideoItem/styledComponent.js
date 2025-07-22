import styled,{ css } from 'styled-components'
import {Link} from 'react-router-dom'
import { sharedStyles } from '../Gaming/styledComponent'

export const SharedStyles = css`
    display: flex;
    flex-direction: ${props => props.$row ? 'row' : 'column'};
    align-items: center;
    justify-content: center;
`

export const ListItem = styled.li`
    ${SharedStyles}
    width: 45%;
    text-align: center;

    @media screen and (min-width: 768px) {
        width: 32%;
    }
`
export const LinkEle = styled(Link)`
    ${sharedStyles}
    text-decoration: none;
    color: inherit;
`

export const Image = styled.img`
    width: 100%;
`

export const Heading = styled.h1`
    font-size: 1rem;
`

export const Paragraph = styled.p`
    font-size: 1rem;
`