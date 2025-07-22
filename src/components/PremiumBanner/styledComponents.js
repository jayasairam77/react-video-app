import styled from 'styled-components'

export const BannerCard = styled.div`
    width: 100%;
    display: ${props => (props.$show ? 'flex' : 'none')};
    flex-direction: column;
    justify-content: space-between;
    gap: 15px;
    min-height: 150px;
    padding: 15px;
`

export const IconContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
`

export const Image = styled.img`
    width: 150px;
`

export const Paragraph = styled.p`
    font-size: 1rem;
    font-weight: 500;
`

export const Button = styled.button`
    background-color: transparent;
    border: 2px solid black;
    font-size: 1rem;
    font-weight: 600;
    align-self: flex-start;
    padding: 12px 15px;
`