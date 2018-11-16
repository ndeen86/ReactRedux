import React from 'react';

const VideoListItem = ({videoItem, onSelectHandle}) =>
{
    return (
        <li className="list-group-item" onClick={() => onSelectHandle(videoItem)}>
            <div className="row">
                <div className="col-md-4">
                    <img className="figure-img img-fluid rounded" src={videoItem.snippet.thumbnails.default.url} />
                </div>
                <div className="col-md-8">
                    {videoItem.snippet.title}
                </div>
            </div>
        </li>);
}
export default VideoListItem;