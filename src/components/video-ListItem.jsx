import React from 'react';

const VideoListItem = ({videoItem}) =>
{
    return <li>{videoItem.snippet.title}</li>;
}

export default VideoListItem;