import { useContext } from 'react'
import UserInteractionContext from '../../Contexts/UserInteractionContext'
import VideoCard from '../VideoCard'
import { Heading, Image, MainCard, Paragraph, SubCard } from './styledComponent'

const SavedVideos = () => {
    const userInteractionContextValues = useContext(UserInteractionContext)
    const { savedVideos } = userInteractionContextValues

    const renderSavedVideos = () => {
        return (
            <SubCard>
                {savedVideos.map(eachItem => <VideoCard kye={eachItem.id} varient='saved-video' $row videoDetails={eachItem} />)}
            </SubCard>
        )
    }

    const renderNoSavedVideos = () => {
        return (
            <>
                <Image src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png" alt="no videos" />
                <Heading>No Saved Videos Found</Heading>
                <Paragraph>You can save your videos while watching them</Paragraph>
            </>
        )
    }

    return (
        <MainCard>
            {savedVideos.length ? renderSavedVideos() : renderNoSavedVideos()}
        </MainCard>
    )
}

export default SavedVideos

