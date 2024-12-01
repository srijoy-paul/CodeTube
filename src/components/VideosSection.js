import React, { useEffect, useState } from 'react'
import { YOUTUBE_VIDEO_API } from '../utils/constants';
import VideoCard from './VideoCard';
import TopicsList from './TopicsList';

function VideosSection() {
    const [videos, setVideos] = useState();
    useEffect(() => {
        fetchVideos();
    }, [])

    const fetchVideos = async () => {
        const resp = await fetch(YOUTUBE_VIDEO_API);
        const videosData = await resp.json();
        console.log("videos received", videosData.items);
        setVideos(videosData.items);
    }
    return (
        <>
            <TopicsList />
            <div className='p-2 flex flex-wrap gap-4'>
                {videos?.map(video => <VideoCard key={video.id} videoData={video} />)}
            </div>
        </>
    )
}

export default VideosSection