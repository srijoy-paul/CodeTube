import React from 'react'

function LiveChatMessage({ image, name, text }) {
    return (
        <div className='flex text-xs gap-2 p-1 px-3 items-center'>
            <img src={`${image}`} className='h-5' alt="" />
            {/* <div className='flex flex-col'> */}
            <span className='text-gray-500 name font-semibold'>{name}</span>
            <span className=''>{text}</span>
            {/* </div> */}
        </div>
    )
}

export default LiveChatMessage