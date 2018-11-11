import React from 'react';

const VideoDetails = ({selectedItem}) =>
{
    console.log(selectedItem);
    if(selectedItem)
    {
        console.log(selectedItem.id.videoId);
        const url = 'https://www.youtube.com/embed/' + selectedItem.id.videoId;
        return (
            <div className="video-detail">
                <div className="embed-responsive embed-responsive-16by9">
                    <iframe className="embed-responsive-item" src={url} ></iframe>
                </div>
                <div className="details">
                    <div>{selectedItem.snippet.title}</div>
                    <div>{selectedItem.snippet.description}</div>
                </div>
            </div>);
    }
    else 
    {
        return <div>Rendering...</div>;
    }
}

export default VideoDetails;