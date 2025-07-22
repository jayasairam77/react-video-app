import {useState, useEffect, usecontext, useContext} from 'react'
import {useNavigate} from 'react-router-dom'
import Cookies from 'js-cookie'
import ThemeContext from '../../Contexts/ThemeContext'
import {
    LoginContainer,
    LoginForm,
    LoginImg,
    FormGroup,
    FormLabel,
    FormInput,
    FormSubmitBtn,
    Paragraph,
} from './styledComponents'

const Login = () => {
    const [showPassword, setShowPassword] = useState(false)
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [errorMsg, setErrorMsg] = useState('')
    
    const navigate = useNavigate()

    const themeContextValues = useContext(ThemeContext)
    const {darkTheme} = themeContextValues

    useEffect(
        () => {
            const jwtToken = Cookies.get('jwt_token')
            if (jwtToken) navigate('/', {replace: true})
        }
    )


    const onClickSubmit = async event => {
        event.preventDefault()
        const userCredentials = {username,password}
        const url = 'https://apis.ccbp.in/login'
        const options = {
            method: 'POST',
            body: JSON.stringify(userCredentials)
        }
        const response = await fetch(url, options)
        const data = await response.json()
        console.log(data)
        if (response.ok){
            Cookies.set('jwt_token',data.jwt_token, {expires: 1})
            navigate('/')
        }
        else{
            setErrorMsg(data.error_msg)
        }
    }

    return (
        <LoginContainer>
            <LoginForm onSubmit={onClickSubmit}>
                <LoginImg src= {darkTheme ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png' : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'} />
                <FormGroup>
                    <FormLabel htmlFor='form-username'>USERNAME</FormLabel>
                    <FormInput id='form-username' type='text' value={username} onChange={event => setUsername(event.target.value)} placeholder='Username' />
                </FormGroup>
                <FormGroup >
                    <FormLabel htmlFor='form-password'>PASSWORD</FormLabel>
                    <FormInput id='form-password' type={showPassword ? 'text' : 'password'} value={password} onChange={event => setPassword(event.target.value)} placeholder='Password' />
                </FormGroup>
                <FormGroup $row>
                    <FormInput onChange={() => setShowPassword(!showPassword)} checked={showPassword} id='show-password-check-box' type='checkbox' />
                    <FormLabel htmlFor='show-password-check-box'>Show Password</FormLabel>
                </FormGroup>
                <FormSubmitBtn type='submit'>Login</FormSubmitBtn>
                {errorMsg !== '' ? <Paragraph $error>*{errorMsg}</Paragraph> : null}
            </LoginForm>
        </LoginContainer>
    )
}

export default Login