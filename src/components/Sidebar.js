import React from 'react'
import sidebarItems from '../utils/sidebarItemsConfig'
import SidebarItem from './SidebarItem'
import { useSelector } from 'react-redux'

function Sidebar() {
    const isMenuOpen = useSelector(store => store.app.isMenuOpen);
    if (!isMenuOpen) return;
    return (
        <div className='p-3 shadow-lg w-52 h-full'>{sidebarItems.map((item) => <SidebarItem item={item} key={item.title} />)}</div>
    )
}

export default Sidebar