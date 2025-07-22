import Cookies from 'js-cookie'
import { useState, useEffect, useContext } from 'react'
import { PacmanLoader } from 'react-spinners'
import GameVideoItem from '../GameVideoItem'
import { MainCard, UnorderedList, SubCard, Heading, Paragraph, Image, RetryBtn } from './styledComponent'
import ThemeContext from '../../Contexts/ThemeContext'

const GAMINGAPISTATUSCONSTATNTS = {
    loading: 'LOADING',
    success: 'SUCCESS',
    failure: 'FAILURE',
}

const Gaming = () => {
    const themeContextValues = useContext(ThemeContext)
    const {darkTheme} = themeContextValues
    const [gamingVideosData, setGamingVideosData] = useState([])
    const [gamingApiStaus, setGamingApiStatus] = useState(GAMINGAPISTATUSCONSTATNTS.loading)

    useEffect(
        () => {
            getGamingVideosData()
        }, []
    )

    const getGamingVideosData = async () => {
        const jwtToken = Cookies.get('jwt_token')
        const url = "https://apis.ccbp.in/videos/gaming"
        const options = {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${jwtToken}`
            }
        }

        setGamingApiStatus(GAMINGAPISTATUSCONSTATNTS.loading)
        const response = await fetch(url, options)
        const data = await response.json()

        if (response.ok) {
            setGamingApiStatus(GAMINGAPISTATUSCONSTATNTS.success)
            setGamingVideosData(data.videos)
        }
        else {
            setGamingApiStatus(GAMINGAPISTATUSCONSTATNTS.failure)
        }
    }

    const renderLoading = () => <PacmanLoader />

    const renderSuccess = () => {
        return (
            <UnorderedList $row>
                {gamingVideosData.map(eachVideo => <GameVideoItem videoDetails={eachVideo} key={eachVideo.id} />)}
            </UnorderedList>
        )
    }

    const renderFailure = () => {
        return (
            <SubCard>
                <Image src={darkTheme ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png' : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'} alt='' />
                <Heading>Oops! Something Went Wring</Heading>
                <Paragraph>We are having some trouble to complete your request. Please try again.</Paragraph>
                <RetryBtn onClick={getGamingVideosData}>Retry</RetryBtn>
            </SubCard>
        )
    }

    const renderGamingPage = () => {
        switch (gamingApiStaus) {
            case GAMINGAPISTATUSCONSTATNTS.loading: return renderLoading()
            case GAMINGAPISTATUSCONSTATNTS.success: return renderSuccess()
            case GAMINGAPISTATUSCONSTATNTS.failure: return renderFailure()
            default: return null;
        }
    }

    return (
        <MainCard>
            {renderGamingPage()}
        </MainCard>
    )
}

export default Gaming