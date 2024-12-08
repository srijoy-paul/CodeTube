import React from 'react'
import LiveChatMessage from './LiveChatMessage'

function LiveChat() {
    return (
        <div className='border-[1px] border-black h-[450px] rounded-lg flex flex-col'>
            <p className='pt-2 rounded-t-lg px-3 py-2 flex justify-between items-center border-b-[1px] border-b-black'>
                <span className='tracking-wider'>Live Chat</span>
                <button className='hover:bg-gray-50 p-2 rounded-full'>
                    <img src="https://img.icons8.com/?size=100&id=46&format=png&color=000000" className='h-5' alt="" />
                </button>
            </p>
            <div className='' >
                <LiveChatMessage image="https://www.pngall.com/wp-content/uploads/5/Profile-Avatar-PNG-Free-Image.png" name="Srijoy Paul" text="Hi good morning! Nice Video" />
                <LiveChatMessage image="https://www.pngall.com/wp-content/uploads/5/Profile-Avatar-PNG-Free-Image.png" name="Priyanka Kumari" text="Hi good morning srijoy! yes Nice Video" />
            </div>
        </div>
    )
}

export default LiveChat