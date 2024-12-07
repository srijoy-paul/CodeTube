import React from 'react'

function VideoInfoSection({ playingVideo, currentChannel }) {
    if (!playingVideo) {
        return <div>loading...</div>
    }
    const { snippet, statistics } = playingVideo;
    const { thumbnails, title } = snippet;
    const { url } = thumbnails?.maxres
    return (
        <>
            <h1 id='video-title' className='font-semibold'>{title}</h1>
            <div className='channel-info-actions w-full'>
                <div className='left-part flex'>
                    <img src={`${currentChannel?.snippet?.thumbnails?.default.url}`} className='rounded-full h-9' alt="" />
                    <p className='flex flex-col font-bold'>{`${currentChannel?.snippet?.title}`} <span className='font-normal'>{"subscriber count"}</span></p>
                    <button>Subscribe</button>
                </div>
                <div className='right-part flex'>
                    <div className='like-dislike-btns'>
                        <button className='like-btn flex'><img src="" alt="" /><span></span></button>
                        <button className='dislike-btn flex'><img src="" alt="" /></button>
                    </div>
                    <button className='share-btn'></button>
                    <button className='download-btn'></button>
                    <button className='clip-btn'></button>
                </div>
                Icon subscriber count likes</div>
            <div id="video-description"></div>
        </>
    )
}

export default VideoInfoSection