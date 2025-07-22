import styled, {css} from 'styled-components'

export const SharedStyles = css`
    width: 100%;
    display: flex;
    flex-direction: ${props => props.$row ? 'row' : 'column'};
`

export const MainCard = styled.div`
    ${SharedStyles}
`

export const SubCard = styled.div`
    ${SharedStyles}
    @media screen and (max-width: 767px){
        flex-direction: column;
    }
`

export const NavCard = styled.div`
    ${SharedStyles}
    width: 100%;
    @media screen and (max-width: 767px){
        ${props => props.$lgEle && 'display: none;'}
    }

    @media screen and (min-width: 768px){
        ${props => !props.$lgEle && 'display: none;'}
        width: 30%;
    }
`