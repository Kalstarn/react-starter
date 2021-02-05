import React from 'react';
import App from './App.jsx';


// var Movielist = (props) => (
//   <div></div>
// );
var Movielist = (props) => (
  <div>
  {
    props.movies.map((array, i) => (
      <div className="movie-entry" key={i}>
        <h5 className="entry-header">
          <em>Movie Entry</em>
        </h5>
        <span>
          <p className="movie-title" onClick={null}> {array['title']} </p>
          <button value={array['title']} className="watched-button" type='text' onClick={(e) => {props.watchedUpdater(event)}}> Watched </button>
        </span>
      </div>
    ))
  }
</div>
);
// Movielist.propTypes = {
//   movies: PropTypes.array.isRequired
// };

export default Movielist;