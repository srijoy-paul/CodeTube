import React, { useEffect } from 'react';
import { closeMenu } from "../utils/appSlice"
import { useSearchParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import WatchPage_PrimarySection from './WatchPage_PrimarySection';
import WatchPage_SecondrySection from './WatchPage_SecondrySection';

function WatchPage() {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(closeMenu());
    }, []);
    return (
        <div className="flex w-full overflow-y-auto">
            <div id="watchpage-primary" className='w-[65%] border-2 border-red-200 p-2 pl-8'>
                <WatchPage_PrimarySection />
            </div>
            <div id="watchpage-secondry" className='w-[35%] border-2 border-red-200'>
                <WatchPage_SecondrySection />
            </div>
        </div>
    )
}

export default WatchPage