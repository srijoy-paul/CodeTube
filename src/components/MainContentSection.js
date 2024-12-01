import React from 'react'
import { Outlet } from 'react-router-dom'
function MainContentSection() {
    return (
        <div className="w-full overflow-x-auto">
            <Outlet />
        </div>
    )
}

export default MainContentSection