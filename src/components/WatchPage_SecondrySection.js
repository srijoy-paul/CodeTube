import React from 'react'
import LiveChat from './LiveChat'

function WatchPage_SecondrySection({ isLive }) {
    return (
        <>
            {isLive ? <LiveChat /> : ""}
            <div>Suggested Videos</div>
        </>
    )
}

export default WatchPage_SecondrySection