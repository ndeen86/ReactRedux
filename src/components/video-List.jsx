import React from 'react';
import VideoListItem from './video-ListItem';

class VideoList extends React.Component
{
    constructor(props) {
        super(props);
    }
    render()
    {
        const videoListItems = this.props.videos.map(video => 
            <VideoListItem onSelectHandle={this.props.onSelectHandle} key={video.snippet.title} videoItem={video}/>
       );
       return (
           <ul className="list-group">
               {videoListItems}
           </ul>
       );
    }   
}

export default VideoList;