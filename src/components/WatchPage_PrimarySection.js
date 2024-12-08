import React, { useEffect, useState } from 'react'
import { YOUTUBE_VIDEO_DATA_API, YOUTUBE_CHANNEL_DATA_API } from '../utils/constants';
import { useSearchParams } from 'react-router-dom';
import VideoPlayer from './VideoPlayer';
import VideoInfoSection from './VideoInfoSection';
import VideoComments from './VideoComments';

const commentsData = [
    {
        name: "Srijoy Paul", comment: "Good video", replies: [
            {
                name: "Manashi Paul", comment: "Nice, Good video", replies: [
                    { name: "Srijoy Paul", comment: "It is a good video", replies: [] },
                    {
                        name: "Priyanka Kumari", comment: "yes, It is a Good video", replies: [
                            { name: "Srijoy Paul", comment: "It is a good video", replies: [] },
                            { name: "Priyanka Kumari", comment: "yes, It is a Good video", replies: [] }
                        ]
                    }
                ]
            },
            { name: "Priyanka Kumari", comment: "Good video", replies: [] }
        ]
    },
    {
        name: "Sujit Paul", comment: "Average video", replies: [
            { name: "Srijoy Paul", comment: "It is a good video", replies: [] },
            {
                name: "Priyanka Kumari", comment: "yes, It is a Good video", replies: [
                    { name: "Srijoy Paul", comment: "It is a good video", replies: [] },
                    { name: "Priyanka Kumari", comment: "yes, It is a Good video", replies: [] }
                ]
            }
        ]
    },
];

function WatchPage_PrimarySection() {
    const [searchParams] = useSearchParams();
    const [playingVideo, setPlayingVideo] = useState();
    const [currentChannel, setCurrentChannel] = useState();
    useEffect(() => {
        (async () => {
            const videoId = searchParams.get('v');
            const data = await fetch(`${YOUTUBE_VIDEO_DATA_API}` + videoId);
            const videoData = await data.json();
            console.log("individual video data", videoData.items[0]);
            setPlayingVideo(videoData.items[0]);

            const data2 = await fetch(`${YOUTUBE_CHANNEL_DATA_API}` + videoData?.items[0]?.snippet?.channelId);
            const channelData = await data2.json();
            console.log("channel data", channelData.items[0]);
            setCurrentChannel(channelData.items[0]);
        })()

    }, [])
    return (
        <>
            <div id="video-player" className='w-full relative'>
                <VideoPlayer playingVideo={playingVideo} currentChannel={currentChannel} />
            </div>
            <div id="video-info" className='w-full flex flex-col gap-3'>
                <VideoInfoSection playingVideo={playingVideo} currentChannel={currentChannel} />
            </div>
            <div id="video-comments" className='w-full'>
                <h1 className="font-bold text-xl">Comments</h1>
                <VideoComments commentsData={commentsData} />
            </div>
        </>
    )
}

export default WatchPage_PrimarySection