import React from 'react'
import sidebarItems from '../utils/sidebarItemsConfig'
import SidebarItem from './SidebarItem'
function Sidebar() {
    return (
        <div className='p-3'>{sidebarItems.map((item) => <SidebarItem item={item} />)}</div>
    )
}

export default Sidebar