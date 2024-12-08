import React from 'react'

function VideoComment({ comment }) {
    return (
        <div className='flex gap-2 bg-gray-100 p-2 rounded-lg'>
            <img src="https://www.pngall.com/wp-content/uploads/5/Profile-Avatar-PNG-Free-Image.png" className='h-7' alt="" />
            <div>
                <p className='font-bold'>@{comment.name}</p>
                <p className="text-sm">{comment.comment}</p>
            </div>
        </div>
    )
}

export default VideoComment