import React, { Component } from 'react';
import SearchBar, { SearchBarResult } from './search_bar';

export default class App extends Component {
  render() {
    return (
      <div>
        <SearchBar />
        <SearchBarResult />
      </div>
    );
  }
}