import React from 'react'

function VideoPlayer({ playingVideo }) {
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
            <div className='bg-[#0505056b] h-[450px] w-full absolute top-0 left-0 rounded-xl'></div>
            <img src="https://seeklogo.net/wp-content/uploads/2016/06/YouTube-icon.png" className='h-14 absolute top-[45%] left-[48%] z-20 cursor-pointer' alt="" />
            <div className='absolute top-0 left-0 bg-transparent p-2 text-black rounded-tl-xl px-6 text-sm flex justify-between w-full'>

                <p className='font-bold text-md'>{title}</p>
                <img src="https://www.pngall.com/wp-content/uploads/2/Share-PNG-File.png" className='h-5 cursor-pointer' alt="" />
            </div>
        </>
    )
}

export default VideoPlayer