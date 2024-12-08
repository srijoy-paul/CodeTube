import React from 'react'
import VideoComment from './VideoComment';



function VideoComments({ commentsData }) {
    return (
        <>

            <div className='flex flex-col gap-2'>{commentsData.map((comment, index) => <>
                <VideoComment comment={comment} key={index} />
                <div className='pl-3 border-l-2 border-l-black ml-5'><VideoComments commentsData={comment.replies} /></div>
            </>)}</div>


        </>
    )
}

export default VideoComments