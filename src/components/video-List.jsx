import React from 'react';
import VideoListItem from './video-ListItem';

class VideoList extends React.Component
{
    constructor(props) {
        super(props);
    }
    render() {
    if(!this.props.videos) {
        return <div>Loading...</div>;
    }
    const videoListItems = this.props.videos.map(video => {
        return <VideoListItem onSelect={this.props.onSelect} key={video.snippet.title} videoItem={video}/>
    });
    return (
        <ul className="list-group">
            {videoListItems}
        </ul>
    );
    }
}

export default VideoList;