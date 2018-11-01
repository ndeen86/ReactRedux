import React, { Component } from 'react';
import SearchBar, { SearchBarResult } from './search_bar';
import VideoDetails from './video-Details';
import VideoList from './video-List';

export default class App extends Component {
  render() {
    const videos = [
      {
        title: 'Name 1'
      },
      {
        title: 'Name 2'
      },
      {
        title: 'Name 3'
      }
    ];
    return (
      <div>
        <div className="col-md-8">
          <SearchBar />
          <SearchBarResult />
        </div>
        <div>
          <div className="col-md-6">
            <VideoDetails />
          </div>
          <div className="col-md-6">
            <VideoList videos={videos} />
          </div>
        </div>
      </div>
    );
  }
}