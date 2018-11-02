import React, { Component } from 'react';
import SearchBar, { SearchBarResult } from './search_bar';
import VideoDetails from './video-Details';
import VideoList from './video-List';
import YTSearch from 'youtube-api-search';

class App extends Component {
  constructor(props)
  {
    super(props);
    this.state = { videos: []};
    YTSearch({key:'{Your youtube api key}', term:'Creation'}, (data) =>
    {
      
      // this.setState({ videos: data });
      this.setState({ videos: data });
    });
  }

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
            <VideoList videos={this.state.videos} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;