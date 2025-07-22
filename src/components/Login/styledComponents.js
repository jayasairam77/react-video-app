import styled from 'styled-components'

export const LoginContainer = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 18px 15px;
    background-color: ${props => props.theme.darkTheme ? '#1f1e1eff' : '#ffffff'};
    color: ${props => props.theme.darkTheme ? '#f0eeeeff' : '#252525ff'};
`

export const LoginForm = styled.form`
    width: 100%;
    max-width: 425px;
    min-height: 250px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    padding: 18px 15px;
    box-shadow: ${props => props.theme.darkTheme ? '1px 2px 20px 6px #030303ff' : '1px 2px 20px 6px lightgray'}; ;
    border-radius: 8px;
    gap: 12px;
    color: ${props => props.theme.darkTheme ? '#f0eeeeff' : '#252525ff'};
`

export const LoginImg = styled.img`
    min-width: 75px;
    width: 100%;
    max-width: 125px;
    margin: 18px 0px 15px 0px;
`

export const FormGroup = styled.div`
    width: 100%;
    display: flex;
    flex-direction: ${props => (props.$row?'row':'column')};
    align-items: ${props => (props.$row?'center':'stretch')};
    gap: 5px;
    // margin-bottom: 12px;
`

export const FormLabel = styled.label`
    font-size: 0.75rem;
    font-weight: 700;
    color: ${props => props.theme.darkTheme ? '#f0eeeeff' : '#252525ff'};
`

export const FormInput =  styled.input`
    padding-left: 8px;
    line-height: 2rem;
    color: #000000;
`

export const FormSubmitBtn = styled.button`
    background-color: #3b82f6;
    color: #ffffff;
    align-self: stretch;
    border: none;
    outline: none;
    height: 30px;
    border-radius: 8px;
`

export const Paragraph = styled.p`
    align-self: flex-start;
    color: ${props => (props.$error ? 'red' : 'black')};
    font-size: clamp(0.75rem, 2vw, 2rem);
    font-weight: 500;
    margin-bottom: 15px;
`