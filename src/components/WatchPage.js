import React, { useEffect } from 'react';
import { closeMenu } from "../utils/appSlice"
import { useSearchParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';

function WatchPage() {
    const [searchParams] = useSearchParams();
    const videoId = searchParams.get('v');

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(closeMenu());
    }, []);
    return (
        <div>WatchPage {videoId}</div>
    )
}

export default WatchPage