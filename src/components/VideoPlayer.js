import React from 'react'

function VideoPlayer({ playingVideo, currentChannel }) {
    if (!playingVideo) {
        return <div>loading...</div>
    }
    const { snippet, statistics } = playingVideo;
    const { thumbnails, title } = snippet;
    const { url } = thumbnails?.maxres;
    return (
        <>
            <div id="video" className='h-[450px] w-full rounded-xl'>
                <img src={`${url}`} className='h-full w-full rounded-xl' alt="" />
            </div>
            <div id="black-layer" className='bg-[#0505058a] h-[450px] w-full absolute top-0 left-0 rounded-xl'></div>

            <img src="https://seeklogo.net/wp-content/uploads/2016/06/YouTube-icon.png" className='h-14 absolute top-[45%] left-[48%] z-20 cursor-pointer' alt="" />

            <div className='absolute top-0 left-0 bg-transparent p-2 text-slate-100 rounded-tl-xl px-4 text-sm flex justify-between w-full'>
                <div className='flex items-center gap-2'>
                    <img src={currentChannel?.snippet?.thumbnails?.default.url} className='rounded-full h-9' alt="" />
                    <p className='font-thin text-lg'>{title}</p>
                </div>
                <div className='flex gap-8 text-sm font-extralight'>
                    <div className="flex flex-col items-center justify-center text-sm">

                        <img src="https://img.icons8.com/?size=100&id=xhTXOR46xziA&format=png&color=f1f5f9" className='h-5 w-5 cursor-pointer' alt="" />
                        <span>Watch later</span>
                    </div>
                    <div className="flex flex-col items-center text-sm">

                        <img src="https://img.icons8.com/?size=100&id=11537&format=png&color=f1f5f9" className='h-5 w-5 cursor-pointer' alt="" />
                        <span>Share</span>
                    </div>
                </div>
            </div>
            <div className='absolute bottom-0 left-0 bg-[#05050594] flex text-[#f1f5f9] items-center p-2 text-sm rounded-bl-xl'><span className='mr-3'>Watch on</span>
                <img src="https://img.icons8.com/?size=100&id=84909&format=png&color=f1f5f9" className='h-6' alt="" /><span>YouTube</span>
            </div>
        </>
    )
}

export default VideoPlayer