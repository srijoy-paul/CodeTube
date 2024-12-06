const API_KEY = 'AIzaSyD-UuaXiOsmBvFh3-hl_xf9z3Ukn5BsgCs';
export const YOUTUBE_VIDEO_API = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&maxResults=50&chart=mostPopular&regionCode=IN&key=${API_KEY}`;

export const YOUTUBE_VIDEO_DATA_API = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&key=${API_KEY}&id=`