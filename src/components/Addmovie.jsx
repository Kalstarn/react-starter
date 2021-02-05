import React from 'react';
import App from './App.jsx';

var Addmovie = (props) => (
  <div className="add-movie">
    <h5 className="title-bar">Add Movie to List</h5>
    <input className="add-movie-input" type="text" value={props.movieToAdd} onChange={props.movieListUpdate} placeholder='Input Movie here...' onSubmit={props.movieAddHandler}></input>
    <button className="add-movie-button" onClick={props.movieAddHandler}>Pronto!</button>
  </div>
);

export default Addmovie;