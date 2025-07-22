import { ListItem, Image, Heading, Card, UnorderedList, SubListItem, LinkEle } from './styledComponents'
import { formatDistanceToNowStrict } from 'date-fns'

const VideoCard = props => {
    const { videoDetails, $row, varient } = props
    const { channel } = videoDetails
    return (
        <ListItem $row={$row} varient={varient}>
            <LinkEle to={`/video/${videoDetails.id}`}>
                <Card varient={varient} >
                    <Image $thumbnail src={videoDetails.thumbnail_url} varient={varient} alt='thumbnail' />
                    <Card $row varient={varient} >
                        <Image $profile varient={varient} src={channel.profile_image_url} alt='profile-img' />
                        <Card >
                            <Heading>{videoDetails.title}</Heading>
                            <UnorderedList $row>
                                <SubListItem $normal >{channel.name}</SubListItem>
                                <SubListItem >{videoDetails.view_count} views</SubListItem>
                                <SubListItem >{formatDistanceToNowStrict(new Date(videoDetails.published_at), { addSuffix: true })}</SubListItem>
                            </UnorderedList>
                        </Card>
                    </Card>
                </Card>
            </LinkEle>
        </ListItem>
    )
}

export default VideoCard