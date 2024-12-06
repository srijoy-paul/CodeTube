import React, { useEffect, useState } from 'react'
import { YOUTUBE_VIDEO_DATA_API } from '../utils/constants';
import { useSearchParams } from 'react-router-dom';
import VideoPlayer from './VideoPlayer';
import VideoInfoSection from './VideoInfoSection';
function WatchPage_PrimarySection() {
    const [searchParams] = useSearchParams();
    const [playingVideo, setPlayingVideo] = useState();
    useEffect(() => {
        (async () => {
            const videoId = searchParams.get('v');
            const data = await fetch(`${YOUTUBE_VIDEO_DATA_API}` + videoId);
            const videoData = await data.json();
            console.log("individual video data", videoData.items[0]);
            setPlayingVideo(videoData.items[0]);

        })()

    }, [])
    return (
        <>
            <div id="video-player" className='w-full relative'>
                <VideoPlayer playingVideo={playingVideo} />
            </div>
            <div id="video-info" className='w-full border-2 border-green-200'>
                <VideoInfoSection playingVideo={playingVideo} />
            </div>
            <div id="video-comments" className='w-full'>Comments</div>
        </>
    )
}

export default WatchPage_PrimarySection