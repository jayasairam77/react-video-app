import { FaFire } from "react-icons/fa";
import { IoGameControllerSharp } from "react-icons/io5";
import { MdOutlinePlaylistAdd } from "react-icons/md";
import { TiHome } from "react-icons/ti";
import { MainCard, SubCard, IconWrapper, UnorderedList, ListEle, Paragraph, Heading, ContactUsContainer, SocialMediaLogos, MediaLogoBtn, Image } from "./styledComponent";

const SideBar = () => {
    return (
        <MainCard>
            <UnorderedList>
                <ListEle><SubCard to='/' $row>
                    <IconWrapper><TiHome /></IconWrapper>
                    <Paragraph>Home</Paragraph>
                </SubCard></ListEle>
                <ListEle><SubCard to='/trending' $row>
                    <IconWrapper><FaFire /></IconWrapper>
                    <Paragraph>Trending</Paragraph>
                </SubCard></ListEle>
                <ListEle><SubCard to='/gaming' $row>
                    <IconWrapper><IoGameControllerSharp /></IconWrapper>
                    <Paragraph>Gaming</Paragraph>
                </SubCard></ListEle>
                <ListEle><SubCard to='/savedvideos' $row>
                    <IconWrapper><MdOutlinePlaylistAdd /></IconWrapper>
                    <Paragraph>Saved videos</Paragraph>
                </SubCard></ListEle>
            </UnorderedList>
            <ContactUsContainer>
                <Heading>CONTACT US</Heading>
                <SocialMediaLogos>
                    <MediaLogoBtn>
                        <Image src='https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png' alt='faceboox' />
                    </MediaLogoBtn>
                    <MediaLogoBtn>
                        <Image src='https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png' alt='twitter' />
                    </MediaLogoBtn>
                    <MediaLogoBtn>
                        <Image src='https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png' alt='linkedin' />
                    </MediaLogoBtn>
                </SocialMediaLogos>
                <Heading>Enjoy! Now to see your channels and recommendations!</Heading>
            </ContactUsContainer>
        </MainCard>
    )
}

export default SideBar