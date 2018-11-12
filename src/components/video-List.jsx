import React from 'react';
import VideoListItem from './video-ListItem';

const VideoList = (props) =>
{
        const videoListItems = props.videos.map(video => 
             <VideoListItem onSelectHandle={props.onSelectHandle} key={video.snippet.title} videoItem={video}/>
        );
        return (
            <ul className="list-group">
                {videoListItems}
            </ul>
        );
}

export default VideoList;