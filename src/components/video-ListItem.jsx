import React from 'react';

class VideoListItem extends React.Component
{
    constructor(props) {
        super(props);
    }

    render() {
    return (
        <li className="list-group-item" onClick={this.props.onSelect}>
            <div className="row">
                <div className="col-md-4">
                    <img src={this.props.videoItem.snippet.thumbnails.default.url} />
                </div>
                <div className="col-md-8">
                    {this.props.videoItem.snippet.title}
                </div>
            </div>
        </li>);
    }
}
export default VideoListItem;