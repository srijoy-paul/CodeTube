import React from 'react'

function SidebarItem({ item }) {

    return item.header ? <div className='font-bold mt-4'>{item.title}</div> : <div>{item.title}</div>
}

export default SidebarItem