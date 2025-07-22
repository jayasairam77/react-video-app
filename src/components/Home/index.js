import { IoMdSearch } from "react-icons/io";
import { useState, useEffect } from 'react'
import Cookies from 'js-cookie'
import { BeatLoader } from 'react-spinners'
import PremiumBanner from '../PremiumBanner'
import { HomeContainer, Card, InputEle, Button, HomeStatusCard, Image, Heading, Paragraph, RetryButton, UnorderedList } from './styledComponents'
import VideoCard from "../VideoCard"

const HOMEVIDEOSAPICONSTANTS = {
    loading: 'LOADING',
    success: 'SUCCESS',
    failure: 'FAILURE',
}

const Home = () => {
    const [searchValue, setSearchValue] = useState('')
    const [homeApiStatus, setHomeApiStatus] = useState(HOMEVIDEOSAPICONSTANTS.loading)
    const [homeVideosData, setHomeVideosData] = useState([])

    useEffect(
        () => {
            getHomeVideoData()
            // eslint-disable-next-line react-hooks/exhaustive-deps
        },[]
    )

    const getHomeVideoData = async () => {
        const jwtToken = Cookies.get('jwt_token')
        const url = `https://apis.ccbp.in/videos/all?search=${searchValue}`
        const options = {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${jwtToken}`,
            },
        }
        setHomeApiStatus(HOMEVIDEOSAPICONSTANTS.loading)
        const response = await fetch(url, options)
        const data = await response.json()
        if (response.ok) {
            setHomeVideosData(data.videos)
            setHomeApiStatus(HOMEVIDEOSAPICONSTANTS.success)
        } else {
            setHomeApiStatus(HOMEVIDEOSAPICONSTANTS.failure)
        }
    }

    const renderSearchBar = () => {
        return (
            <Card $search $row>
                <InputEle type="search" value={searchValue} onChange={event => setSearchValue(event.target.value)} placeholder="Search" />
                <Button onClick={getHomeVideoData}>
                    <IoMdSearch size={25} />
                </Button>
            </Card>
        )
    }

    const renderLoadingView = () => {
        return (
            <HomeStatusCard>
                <BeatLoader />
            </HomeStatusCard>
        )
    }

    const renderSuccessView = () => {
        return (
            <>
                {homeVideosData.length ?
                    <HomeStatusCard>
                        <UnorderedList>
                            {
                                homeVideosData.map(eachVideo => <VideoCard key={eachVideo.id} varient='home' videoDetails={eachVideo} />)
                            }
                        </UnorderedList>
                    </HomeStatusCard>
                    :
                    <HomeStatusCard>
                        <Image $novideos src='https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png' alt='no videos' />
                        <Heading>No Search results found</Heading>
                        <Paragraph>Try different key words or remove search filter</Paragraph>
                        <RetryButton onClick={getHomeVideoData}>Retry</RetryButton>
                    </HomeStatusCard>
                }
            </>
        )
    }

    const renderFailureView = () => {
        return (
            <HomeStatusCard>
                <Image src='https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png' alt='failure' />
                <Heading>Oops! Something Went Wrong</Heading>
                <Paragraph>We are having some trouble to complete your request. Please try again.</Paragraph>
                <RetryButton>Retry</RetryButton>
            </HomeStatusCard>
        )
    }

    const renderHomeVideos = () => {
        switch (homeApiStatus) {
            case HOMEVIDEOSAPICONSTANTS.loading: return renderLoadingView()
            case HOMEVIDEOSAPICONSTANTS.success: return renderSuccessView()
            case HOMEVIDEOSAPICONSTANTS.failure: return renderFailureView()
            default: return null
        }
    }

    return (
        <HomeContainer>
            <HomeContainer $row>
                <Card>
                    <PremiumBanner />
                    {renderSearchBar()}
                    {renderHomeVideos()}
                </Card>
            </HomeContainer>
        </HomeContainer>
    )
}

export default Home