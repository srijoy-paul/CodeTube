import React from 'react'

function VideoInfoSection({ playingVideo }) {
    if (!playingVideo) {
        return <div>loading...</div>
    }
    const { snippet, statistics } = playingVideo;
    const { thumbnails, title } = snippet;
    const { url } = thumbnails?.maxres
    return (
        <>
            <h1 id='video-title' className='font-semibold'>{title}</h1>
            <div id='channel-info-actions'>channelNameIcon subscriber count likes</div>
            <div id="video-description"></div>
        </>
    )
}

export default VideoInfoSection