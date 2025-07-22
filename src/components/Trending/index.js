import { useState, useEffect, useContext } from 'react'
import Cookies from 'js-cookie'
import { HashLoader } from 'react-spinners'
import VideoCard from '../VideoCard'
import { MainCard, UnorderedList, SubCard, Paragraph, Heading, Image, RetryBtn } from './styledComponent'
import ThemeContext from '../../Contexts/ThemeContext'

const TRENDINGAPICONSTATNS = {
    loading: 'LOADING',
    success: 'SUCCESS',
    failure: 'FAILURE',
}

const Trending = () => {
    const [trendingVideosData, setTrendingVideosData] = useState([])
    const [trendingApiStatus, setTrendingApiStatus] = useState(TRENDINGAPICONSTATNS.loading)
    const themeContextValues = useContext(ThemeContext)
    const {darkTheme} = themeContextValues

    useEffect(
        () => {
            getTrendingVideosData()
        }, []
    )

    const getTrendingVideosData = async () => {
        const jwtToken = Cookies.get('jwt_token')
        const url = "https://apis.ccbp.in/videos/trending"
        const options = {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${jwtToken}`
            }
        }
        setTrendingApiStatus(TRENDINGAPICONSTATNS.loading)
        const response = await fetch(url, options)
        const data = await response.json()
        if (response.ok) {
            setTrendingVideosData(data.videos)
            setTrendingApiStatus(TRENDINGAPICONSTATNS.success)
        }
        else {
            setTrendingApiStatus(TRENDINGAPICONSTATNS.failure)
        }
    }

    const renderLoading = () => <HashLoader />

    const renderSuccess = () => {
        return (
            <UnorderedList>
                {trendingVideosData.map(eachVideo => <VideoCard key={eachVideo.id} $row varient='trending' videoDetails={eachVideo} />)}
            </UnorderedList>
        )
    }

    const renderFailure = () => {
        return (
            <SubCard>
                <Image src= {darkTheme ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png' :'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'} alt='' />
                <Heading>Oops! Something Went Wring</Heading>
                <Paragraph>We are having some trouble to complete your request. Please try again.</Paragraph>
                <RetryBtn onClick={getTrendingVideosData}>Retry</RetryBtn>
            </SubCard>
        )
    }

    const renderTrendingPage = () => {
        switch (trendingApiStatus) {
            case TRENDINGAPICONSTATNS.loading: return renderLoading();
            case TRENDINGAPICONSTATNS.success: return renderSuccess();
            case TRENDINGAPICONSTATNS.failure: return renderFailure();
            default: return null;
        }
    }
    return (
        <MainCard>
            {renderTrendingPage()}
        </MainCard>
    )
}

export default Trending