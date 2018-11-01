import React from 'react';
import VideoListItem from './video-ListItem';

const VideoList = ({videos}) =>
{
    const videoListItems = videos.map(video => {
        return <VideoListItem key={video.title} videoItem={video}/>
    });
    return (
        <ul>
            {videoListItems}
        </ul>
    );
    
}

export default VideoList;