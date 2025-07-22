import { Outlet } from 'react-router-dom'
import { useState } from 'react'
import Navbar from '../Navbar'
import SideBar from '../SideBar'
import { MainCard, SubCard, NavCard } from "./styledComponent"

const Layout = () => {
    const [smSideBar, setSmSideBar] = useState(false)

    return (
        <MainCard>
            <Navbar onClickOptions={ () => setSmSideBar(smbar => !smbar) } />
            <SubCard $row>
                {smSideBar &&
                    <NavCard>
                        <SideBar />
                    </NavCard>
                }
                <NavCard $lgEle>
                    <SideBar />
                </NavCard>
                <Outlet />
            </SubCard>
        </MainCard>
    )
}

export default Layout