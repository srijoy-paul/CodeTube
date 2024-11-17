import React from 'react'

function Header() {
    return (
        <div className="p-2 px-8 shadow-lg flex items-center gap-3 justify-between">
            {/* menu btn */}
            <div className='flex items-center gap-3'>

                <img src="https://icon-icons.com/downloadimage.php?id=155296&root=2596/PNG/512/&file=hamburger_button_menu_icon_155296.png" className="h-6 cursor-pointer" alt="" />
                {/* logo */}
                <img src="https://www.freeiconspng.com/uploads/youtube-logo-png-transparent-image-5.png" className='h-16 cursor-pointer' alt="" />
                {/* searchbar */}
                <div className="ml-10">
                    <input type="text" className=' border-[1px] border-gray-200 p-1 rounded-l-full w-[600px]' placeholder='   Search' />
                    <button className="border-[1px] border-gray-200 p-1  rounded-r-full bg-gray-100 w-[50px]">🔍 </button>
                </div>
            </div>
            {/* profile */}
            <img src="https://www.pngall.com/wp-content/uploads/5/Profile-Avatar-PNG-Free-Image.png" alt="" className="h-6 mr-2 cursor-pointer" />
        </div>
    )
}

export default Header