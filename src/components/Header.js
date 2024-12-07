import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { toggleMenu } from '../utils/appSlice';
import { Link } from 'react-router-dom';
import { YOUTUBE_SEARCH_DATA_API } from '../utils/constants';
function Header() {
    const [searchQuery, setSearchOuery] = useState([]);
    const [searchSuggestions, setSearchSuggestions] = useState(null);
    const [showSuggestions, setShowSuggestions] = useState(false);
    const dispatch = useDispatch();

    const toogleMenuHandler = () => {
        dispatch(toggleMenu());
    }

    useEffect(() => {
        const searchTimeout = setTimeout(() => {
            fetchSearchSuggestions();
        }, 250);
        return () => clearTimeout(searchTimeout);
    }, [searchQuery]);

    const fetchSearchSuggestions = async () => {
        const data = await fetch(`${YOUTUBE_SEARCH_DATA_API}` + searchQuery);
        // console.log(data);

        const searchSuggestionsData = await data.json();
        console.log("search suggestions", searchSuggestionsData[1]);
        setSearchSuggestions(searchSuggestionsData[1]);
    }

    const handleKeypress = (e) => {
        // console.log("search term", e.target.value);
        setSearchOuery(e.target.value);

    }
    return (
        <div className="p-2 px-8 shadow-lg flex items-center gap-3 justify-between">
            {/* menu btn */}
            <div className='flex items-center gap-3'>

                <img src="https://icon-icons.com/downloadimage.php?id=155296&root=2596/PNG/512/&file=hamburger_button_menu_icon_155296.png" className="h-6 cursor-pointer" alt="" onClick={toogleMenuHandler} />
                {/* logo */}
                <img src="https://www.freeiconspng.com/uploads/youtube-logo-png-transparent-image-5.png" className='h-16 cursor-pointer' alt="" />
                {/* searchbar */}
                <div id='searchbar' className="ml-10 relative">
                    <div id="search">
                        <input type="text" className=' border-[1px] border-gray-200 p-1 rounded-l-full w-[600px] pl-5' value={searchQuery} placeholder='Search' onChange={handleKeypress} onFocus={() => setShowSuggestions(true)} onBlur={() => setShowSuggestions(false)} />
                        <button className="border-[1px] border-gray-200 p-1  rounded-r-full bg-gray-100 w-[50px]">🔍 </button>
                    </div>
                    {showSuggestions ? <div id="searchSuggestions" className='absolute bg-white w-[600px] rounded-lg pl-4 px-2 py-2 z-30'>
                        <ul className='flex flex-col gap-1'>
                            {searchSuggestions?.map((item, index) => <li className='cursor-pointer hover:bg-gray-100 px-1 w-full' key={index}>🔍 {item}</li>)}
                        </ul>
                        {searchSuggestions?.length !== 0 ? <div className='text-xs flex justify-end'><p>powered by srijoy</p></div> : ""}
                    </div> : ""}
                </div>
            </div>
            {/* profile */}
            <img src="https://www.pngall.com/wp-content/uploads/5/Profile-Avatar-PNG-Free-Image.png" alt="" className="h-6 mr-2 cursor-pointer" />
        </div>
    )
}

export default Header