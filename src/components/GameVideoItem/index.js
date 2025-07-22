import { ListItem, Image, Heading, Paragraph, LinkEle } from './styledComponent'
import { Link } from 'react-router-dom'

const GameVideoItem = props => {
    const { videoDetails } = props
    return (
        <ListItem>
            <LinkEle to={`/video/${videoDetails.id}`}>
                <Image src={videoDetails.thumbnail_url} alt={videoDetails.title} />
                <Heading>{videoDetails.title}</Heading>
                <Paragraph>{videoDetails.view_count} Watching Worldwide</Paragraph>
            </LinkEle>
        </ListItem>
    )
}

export default GameVideoItem