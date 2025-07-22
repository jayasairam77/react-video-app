import styled, {css} from 'styled-components'

const sharedStyles  = css`
    width: 100%;
    display: flex;
    flex-direction: ${props => props.$row ? 'row' : 'column'};
    background-color: ${props => props.theme.darkTheme ? '#000000' : '#ffffff'};
    color: ${props => props.theme.darkTheme ? '#ffffff' : '#000000'};
`

export const MainCard = styled.div`
    ${sharedStyles}
    align-items: center;
    padding: 12px;
    min-height: calc(100vh - 50px);
`

export const SubCard = styled.div`
    ${sharedStyles}
    gap: 12px;
`

export const Heading = styled.h1`
    font-size: 1rem;
`

export const Paragraph = styled.p`
    font-size: 1rem
`

export const Image = styled.img`
    width: 100%;
`