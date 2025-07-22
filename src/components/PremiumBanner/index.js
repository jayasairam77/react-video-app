import {BannerCard, IconContainer, Image, Paragraph, Button} from './styledComponents'
import { IoMdClose } from "react-icons/io";
import {useState} from 'react'

const PremiumBanner = () => {
    const [showBanner, setShowBanner] = useState(true)
    return (
        <BannerCard $show={showBanner}>
            <IconContainer >
                <IoMdClose onClick={() => setShowBanner(false)}  />
            </IconContainer>
            <Image src='https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png' alt='logo' />
            <Paragraph>Buy Nxt Watch Premium prepaid plans with UPI</Paragraph>
            <Button>GET IT NOW</Button>
        </BannerCard>
    )
}

export default PremiumBanner