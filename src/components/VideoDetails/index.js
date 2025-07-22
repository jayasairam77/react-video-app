import { useParams } from 'react-router-dom'
import { useState, useEffect, useContext } from 'react'
import Cookies from 'js-cookie'
import { GridLoader } from 'react-spinners'
import { BiLike } from "react-icons/bi";
import { BiDislike } from "react-icons/bi";
import { MdOutlinePlaylistAdd } from "react-icons/md";
import savedVideosContext from '../../Contexts/UserInteractionContext';
import ThemeContext from '../../Contexts/ThemeContext';
import { PlayerContainer, StyledReactPlayer, MainCard, Heading, Paragraph, UnorderedList, ListItem, IconContainer, HorizontalLine, Image, SubCard, Button, RetryBtn, ApiStatusCard } from './styledComponent'

const VIDEODETAILSAPICONSTANTS = {
    loading: 'LOADING',
    success: 'SUCCESS',
    failure: 'FAILURE',
}

const VideoDetails = () => {

    const themeContextValues = useContext(ThemeContext)
    const {darkTheme} = themeContextValues
    const savedVideosContextValues = useContext(savedVideosContext)
    const { savedVideos, alterSavedVideos, userInteraction, alterUserInteraction } = savedVideosContextValues

    const [videoDetailsApiStatus, setVideoDetailsApiStatus] = useState(VIDEODETAILSAPICONSTANTS.loading)
    const [videoDetailsData, setVideoDetailsData] = useState([])
    const { id } = useParams()
    console.log(savedVideos)
    useEffect(
        () => {
            getVideoDetailsData()
            // eslint-disable-next-line react-hooks/exhaustive-deps
        }, []
    )

    const getVideoDetailsData = async () => {
        const jwtToken = Cookies.get('jwt_token')
        const url = `https://apis.ccbp.in/videos/${id}`
        const options = {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${jwtToken}`
            }
        }

        setVideoDetailsApiStatus(VIDEODETAILSAPICONSTANTS.loading)
        const response = await fetch(url, options)
        const data = await response.json()
        console.log(data)
        if (response.ok) {
            setVideoDetailsData(data.video_details)
            setVideoDetailsApiStatus(VIDEODETAILSAPICONSTANTS.success)
            alterUserInteraction(data.video_details.id, 'init')
        }
        else {
            setVideoDetailsApiStatus(VIDEODETAILSAPICONSTANTS.failure)
        }
    }

    const renderLoading = () => <GridLoader />

    const renderFailure = () => {
        return (
            <ApiStatusCard>
                <Image $failure src={darkTheme ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png' : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'} alt='' />
                <Heading>Oops! Something Went Wring</Heading>
                <Paragraph>We are having some trouble to complete your request. Please try again.</Paragraph>
                <RetryBtn onClick={getVideoDetailsData}>Retry</RetryBtn>
            </ApiStatusCard>
        )
    }

    const renderSuccess = () => {
        return (
            <>
                <PlayerContainer>
                    <StyledReactPlayer src={videoDetailsData.video_url}
                        controls
                        light={videoDetailsData.thumbnail_url}
                    />
                </PlayerContainer>

                <Heading>{videoDetailsData.title}</Heading>
                <UnorderedList $row>
                    <ListItem>{videoDetailsData.view_count} views</ListItem>
                    <ListItem>{videoDetailsData.published_at}</ListItem>
                </UnorderedList>
                <SubCard $row>
                    <Button onClick={() => alterUserInteraction(videoDetailsData.id, 'like')}
                        $active={userInteraction[videoDetailsData.id].like} $row>
                        <IconContainer><BiLike /></IconContainer>
                        Like
                    </Button>
                    <Button onClick={() => alterUserInteraction(videoDetailsData.id, 'dislike')} $active={userInteraction[videoDetailsData.id].dislike} $row>
                        <IconContainer><BiDislike /></IconContainer>
                        Dislike
                    </Button>
                    <Button onClick={() => {
                        alterUserInteraction(videoDetailsData.id, 'save')
                        alterSavedVideos(videoDetailsData)
                    }}
                        $active={userInteraction[videoDetailsData.id].save} $row>
                        <IconContainer><MdOutlinePlaylistAdd /></IconContainer>
                        Save
                    </Button>
                </SubCard>
                <HorizontalLine />
                <SubCard $row>
                    <Image src={videoDetailsData.channel.profile_image_url} alt={videoDetailsData} />
                    <SubCard $ChannelCard>
                        <Heading>{videoDetailsData.channel.name}</Heading>
                        <Paragraph>{videoDetailsData.channel.subscriber_count} subscribers</Paragraph>
                    </SubCard>
                </SubCard>
                <Paragraph $descr>{videoDetailsData.description}</Paragraph>
            </>
        )
    }

    const renderVideoDetails = () => {
        switch (videoDetailsApiStatus) {
            case (VIDEODETAILSAPICONSTANTS.loading): return renderLoading();
            case (VIDEODETAILSAPICONSTANTS.success): return renderSuccess();
            case (VIDEODETAILSAPICONSTANTS.failure): return renderFailure();
            default: return null;
        }
    }

    return (
        <MainCard>
            {renderVideoDetails()}
        </MainCard>

    )
}

export default VideoDetails