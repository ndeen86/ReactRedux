import React, { Component } from 'react';
import SearchBar, { SearchBarResult } from './search_bar';
import VideoDetails from './video-Details';
import VideoList from './video-List';

export default class App extends Component {
  render() {
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
            <VideoList />
          </div>
        </div>
      </div>
    );
  }
}