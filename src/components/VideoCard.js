import React from 'react';
import { Link } from 'react-router-dom';
function VideoCard({ videoData }) {
    const { contentDetails, id: videoId, snippet, statistics } = videoData;
    const { title, thumbnails, channelTitle, publishedAt } = snippet;
    const { url: videoImageUrl } = thumbnails.medium;
    const { viewCount } = statistics;

    return (
        <Link to={`/watch?v=${videoId}`} className="rounded-lg w-64 shadow-md">
            <div className='video-thumbnail rounded-md aspect-video relative'>
                <img src={`${videoImageUrl}`} alt="" className="aspect-video rounded-md" />
                <span className="video-duration absolute bottom-0 right-4"></span>
            </div>
            <div className='flex p-2'>
                <div className="channel-image rounded-full">
                    <img src="" alt="" className="h-[36px] w-[36px] rounded-full" />
                </div>
                <div className='flex flex-col'>
                    <div className="video-title text-sm tracking-tight font-bold">{title}</div>
                    <div className="video-info">
                        <p className="channelName text-xs">{channelTitle}</p>
                        <div className="statsInfo flex text-xs gap-2">
                            <span className='video-views'>{viewCount} views</span>
                            <span className='video-postDate'>{publishedAt}</span>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default VideoCard