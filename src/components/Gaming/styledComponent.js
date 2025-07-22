import styled,{css} from 'styled-components'

export const sharedStyles = css`
    display: flex;
    flex-direction: ${props => props.$row ? 'row' : 'column'};
    align-items: center;
    justify-content: center;
    background-color: ${props => props.theme.darkTheme ? '#282929ff' : '#ffffffff'};
    color: ${props => props.theme.darkTheme ? '#ffffff' : '#000000'};
`

export const MainCard = styled.div`
    ${sharedStyles}
    width: 100%;
    padding: 12px;
    min-height: calc(100vh - 50px);
`

export const SubCard = styled.div`
    ${sharedStyles}
    align-items: center;
    justify-content: center;
    gap: 8px;
`

export const UnorderedList = styled.ul`
    ${sharedStyles}
    list-style: none;
    flex-wrap: wrap;
    gap: 8px;
`

export const Image = styled.img`
    width: 100%;

    @media screen and (min-width: 768px){
        width: 50%;
    }
`

export const Heading = styled.h1`
    font-size: 1rem;
`

export const Paragraph = styled.p`
    font-size: 1rem;
`

export const RetryBtn = styled.button`
    background-color: #343cd5ff;
    color: #ffffff;
    border: none;
    outline: none;
    padding: 5px 12px;
    border-radius: 5px;

    &:hover{
        transform: scale(1.10);
    }
`