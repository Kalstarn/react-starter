import React from 'react';
import App from './App.jsx';

var Search = (props) => (
  <div className="search-bar">
    <h5 className="title-bar">Search Here</h5>
    <span>
      <input type="text" value={props.searchTerm} onChange={props.searchUpdate} placeholder="Input search term here..." />
      <button className="search-button" onClick={props.searchHandler}>Engage!</button>
      <button className="clear-filter-button" onClick={props.resetList}> Clear Filters </button>
    </span>
    <span>
      <button className="watched-list" onClick={props.watchedList}> Watched List </button>
      <button className="to-watch" onClick={props.toWatchList}>To Watch </button>
    </span>
  </div>
);

export default Search;


// onChange={props.onChange}