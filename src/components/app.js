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
    YTSearch({key:'', term:'Creation'}, (videos) =>
    {
      this.setState({ videos });
    });
    this.onHandleChange = this.onHandleChange.bind(this);
  }

  onHandleChange(event) {
    console.log(event);
  }

  render() {
    return (
      <div>
        <div className="col-md-8">
          <SearchBar onHandleChange={this.onHandleChange}/>
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