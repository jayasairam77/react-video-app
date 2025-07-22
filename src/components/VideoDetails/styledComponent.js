import styled, {css} from 'styled-components'
import ReactPlayer from 'react-player'

export const SharedStyle = css`
    display: flex;
    flex-direction: ${props => props.$row ? 'row' : 'column'};
    background-color: ${props => props.theme.darkTheme ? '#000000' : '#ffffff'};
    color: ${props => props.theme.darkTheme ? '#ffffff' : '#000000'};
`

export const MainCard = styled.div`
    ${SharedStyle}
    width: 100%;
    min-height: calc(100vh - 50px);
    padding: 12px 8px;
`

export const ApiStatusCard = styled.div`
    ${SharedStyle}
    width: 100%;
    align-items: center;
    justify-content: center;
    flex-grow: 1;
    text-align: center;
`

export const PlayerContainer = styled.div`
  width: 100%;
  max-width: 700px;
  aspect-ratio: 16 / 9;
  max-height: 450px;
  overflow: hidden;
  margin: 15px 0px;

  @media screen and (max-width: 768px) {
    aspect-ratio: 4 / 3;
    max-height: 250px;
  }
`

export const StyledReactPlayer = styled(ReactPlayer)`
  width: 100% !important;
  height: 100% !important;
  object-fit: contain;
`

export const Heading = styled.h1`
    font-size: 1rem;
    font-weight: 450;
`

export const Paragraph = styled.p`
    font-size: 1rem;
`

export const UnorderedList = styled.ul`
    ${SharedStyle}
    align-self: flex-start;
    gap: 12px;
    list-style: none;
    margin: 12px 0px;
`

export const ListItem = styled.li`
    ${SharedStyle}
    flex-direction: row;
`

export const Button = styled.button`
    ${SharedStyle}
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    background-color: transparent;
    border: none;
    outline: none;
    margin-left: 12px;
    color: ${props => props.$active ? '#7287e3ff':'inherit'}
`

export const IconContainer = styled.span`
    font-size: 25px;
`

export const HorizontalLine = styled.hr`
    width: 100%;
`

export const SubCard = styled.div`
    ${SharedStyle}
    ${props => {
        if (props.$ChannelCard){
            return`
                align-items: flex-start;
            `
        }
        else{
            return`
                align-items: center;
                margin: 12px 0px;
            `
        }
    }}
`

export const Image = styled.img`
    width: ${props => props.$failure ? '100%' : '50px'};
    height: ${props => props.$failure ? '100%' : '50px'};
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