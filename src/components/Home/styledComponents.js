import styled from "styled-components"

export const HomeContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: ${props => props.$row ? 'row' : 'column'};
    background-color: ${props => props.theme.darkTheme ? '#000000' : '#ffffff'};
    color: ${props => props.theme.darkTheme ? '#ffffff' : '#000000'};
`

export const Card = styled.div`
    display: flex;
    flex-direction: ${props => props.$row ? 'row' : 'column'};
    width: ${props => props.$sideBar ? '30%' : '100%'};
    ${props => !props.$sideBar && `padding: 12px 8px;`}
    ${props => props.$search && `padding: 12px 0px;`}
    justify-content: space-between;
    align-items: ${props => props.$row ? 'stretch' : 'center'};
    ${props => props.$sideBar && `height: calc(100vh - 50px);`}
    ${props => props.$sideBar && `background-color: ${props.theme.darkTheme ? '#3e3e3eff' : 'transparent'};`}

    ${props => props.$sideBar && `
    @media screen and (max-width: 767px){
        display: none;
    }`
    }
`

export const HomeStatusCard = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    height: 100%;
    flex-grow: 1;
`

export const InputEle = styled.input`
    width: 100%;
    border: 1px solid #64748b;
    line-height: 2rem;
    padding-left: 12px;
    outline: none;
    background-color: transparent;
    color: ${props => props.theme.darkTheme ? '#dfdfdfff' : '#323232ff'};
`

export const Button = styled.button`
    border: 1px solid #64748b;
    background-color: ${props => props.theme.darkTheme ? '#3e3e3eff' : '#e7e7e7ec'};
    color: ${props => props.theme.darkTheme ? '#d1d1d1ff' : '#646464ff'};
    min-width: 50px;
`

export const RetryButton = styled.button`
    background-color: blue;
    border: 1px solid blue;
    color: #ffffff;
    width: 75px;
    height: 25px;
    font-weight: bold;
    border-radius: 8px;
    cursor: pointer;
    &:hover{
        box-shadow: 0 0 8px rgba(0, 0, 255, 0.6);
        transform: scale(1.05);
    }
`

export const Image = styled.img`
    width: ${props => props.$novideos ? '200px' : '100%'};
`

export const Heading = styled.h1`
    font-size: 1rem;
`

export const Paragraph = styled.p`
    font-size: 1rem;
`

export const UnorderedList = styled.ul`
    width: 100%;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 12px;
`