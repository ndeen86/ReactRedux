import React from 'react';
import VideoListItem from './video-ListItem';

const VideoList = ({videos}) =>
{
    if(!videos) {
        return <div>Loading...</div>;
    }
    const videoListItems = videos.map(video => {
        return <VideoListItem key={video.snippet.title} videoItem={video}/>
    });
    return (
        <ul>
            {videoListItems}
        </ul>
    );
    
}

export default VideoList;