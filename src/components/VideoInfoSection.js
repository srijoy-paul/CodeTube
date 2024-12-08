import React from 'react'

function VideoInfoSection({ playingVideo, currentChannel }) {
    if (!playingVideo) {
        return <div>loading...</div>
    }
    const { snippet, statistics } = playingVideo;
    const { thumbnails, title } = snippet;
    const { url } = thumbnails?.maxres;
    const { likeCount } = statistics;
    return (
        <>
            <h1 id='video-title' className='font-semibold text-lg'>{title}</h1>
            <div className='channel-info-actions w-full flex justify-between'>
                <div className='left-part flex gap-3 items-center'>
                    <img src={`${currentChannel?.snippet?.thumbnails?.default.url}`} className='rounded-full h-9' alt="" />
                    <p className='flex flex-col font-bold text-sm'>{`${currentChannel?.snippet?.title}`} <span className='font-normal text-xs'>{`${currentChannel?.statistics?.subscriberCount} subscribers`}</span></p>
                    <button className='subscribe-btn p-1 bg-black text-white rounded-full px-4 cursor-pointer ml-3'>Subscribe</button>
                </div>
                <div className='right-part flex gap-2'>
                    <div className='like-dislike-btns bg-gray-100 p-1 flex items-center gap-2 rounded-full px-4 text-sm'>
                        <button className='like-btn flex gap-1 items-center'><img src="https://img.icons8.com/?size=100&id=85608&format=png&color=000000" className='h-4' alt="" /><span className='font-medium text-sm'>{likeCount}</span></button> |
                        <button className='dislike-btn flex text-sm items-center'><img src="https://img.icons8.com/?size=100&id=87695&format=png&color=000000" className='h-4' alt="" /></button>
                    </div>
                    <button className='share-btn flex p-1 px-4 bg-gray-100 rounded-full items-center gap-2 font-medium text-sm'><img src="https://img.icons8.com/?size=100&id=11504&format=png&color=000000" className='h-4' alt="" /> Share</button>
                    <button className='download-btn flex p-1 px-4 bg-gray-100 rounded-full items-center gap-2 font-medium text-sm'>
                        <img src="https://img.icons8.com/?size=100&id=14100&format=png&color=000000" className="h-4" alt="" /> Download
                    </button>
                    <button className='clip-btn'></button>
                </div>
            </div>
            <div id="video-description"></div>
        </>
    )
}

export default VideoInfoSection