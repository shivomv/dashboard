import React, { useState } from 'react'
import { Topnav, SideNav, MainContent } from './Components/Index'

const DefaultLayout = () => {
    const [collapsed, setCollapsed] = useState(false);

    const handleCollapseToggle = (isCollapsed) => {
        setCollapsed(isCollapsed);
    };
    return (
        <>
            <Topnav onCollapseToggle={handleCollapseToggle} />

            <div className='vw-100 d-flex'>
                <SideNav collapsed={collapsed} />
                <MainContent />

            </div>

        </>
    )
}

export default DefaultLayout