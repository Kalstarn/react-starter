import React from 'react';
import Movielist from './Movielist.jsx';
import Search from './Search.jsx';
import Addmovie from './Addmovie.jsx';

class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      movies: [],
      permenentList: [],
      searchTerm: '',
      movieToAdd: ''
    };
    this.searchHandler = this.searchHandler.bind(this);
    this.searchUpdate = this.searchUpdate.bind(this);
    this.movieAddHandler = this.movieAddHandler.bind(this);
    this.movieListUpdate = this.movieListUpdate.bind(this);
    this.resetList = this.resetList.bind(this);
    this.watchedUpdater = this.watchedUpdater.bind(this);
    this.watchedList = this.watchedList.bind(this);
    this.toWatchList = this.toWatchList.bind(this);
    this.titleInfo = this.titleInfo.bind(this);
  }

  titleInfo() {

  }
  watchedList() {
    var resultList = [];
    var shorthand = this.state.permenentList;
    for (var i = 0; i < shorthand.length; i++) {
      if(shorthand[i].watched === true) {
        resultList.push(shorthand[i])
      }
    }
    this.setState({
      movies: resultList
    })
  }

  toWatchList() {
    var resultList = [];
    var shorthand = this.state.permenentList;
    for (var i = 0; i < shorthand.length; i++) {
      if(shorthand[i].watched === false) {
        resultList.push(shorthand[i])
      }
    }

    this.setState({
      movies: resultList
    })
  }

  watchedUpdater(event) {
    // var tempMovies = this.state.movies.slice();
    var tempPerm = this.state.permenentList.slice();
    var title = event.target.attributes.value.value;
    // console.log('state is being toggled for: ', title)
    // for( var i = 0; i < tempMovies.length; i++) {
    //   if (tempMovies[i]['title'] === title) {
    //     console.log('current state: ', tempMovies[i]['watched'])
    //     tempMovies[i]['watched'] = !tempMovies[i]['watched'];
    //     console.log('New State in sublist: ', tempMovies[i]['watched'])
    //   }
    // }
    for( var i = 0; i < tempPerm.length; i++) {
      if (tempPerm[i]['title'] === title) {
        tempPerm[i]['watched'] = !tempPerm[i]['watched'];
        // console.log('New State in master list: ', tempPerm[i]['watched'])
      }
    }
    // if((tempMovies[i]['title'] === title) && (tempMovies[i]['watched'] === true))
    // if((tempPerm[i]['title'] === title) && (tempPerm[i]['watched'] === true))
    this.setState({
      movies: tempMovies,
      permenentList: tempPerm
    })
  }

  resetList() {
    this.setState({
      movies: this.state.permenentList
    })
  }

  movieAddHandler(value) {
    value = {
      title: this.state.movieToAdd,
      Year: 'tempinfo',
      Runtime: 'tempinfo',
      Metascore: 'tempinfo',
      imdbRating: 'tempinfo',
      watched: false
    };
    this.setState({
      movies: [...this.state.movies, value],
      permenentList: [...this.state.movies, value]
    })
  }

  movieListUpdate(event) {
    this.setState({
      movieToAdd: event.target.value
    });
  }

  searchUpdate(event) {
    this.setState({
      searchTerm: event.target.value
    });
  }

  searchHandler(value) {
    var searchResults = [];
    value = this.state.searchTerm;
    for (var i = 0; i < this.state.movies.length; i++) {
      if(this.state.movies[i]['title'].includes(value)) {
        searchResults.push(this.state.movies[i]);
      }
    }
    this.setState({
      movies: searchResults
    });
  }

  render(){
    return(
    <div>
      <h1 className="title">Movie List Application</h1>
      <div>
        <h5><Addmovie movieAddHandler={this.movieAddHandler} movieListUpdate={this.movieListUpdate} movieToAdd={this.state.movieToAdd}/></h5>
      </div>
      <div>
        <Search searchHandler={this.searchHandler} searchUpdate={this.searchUpdate} searchTerm={this.state.searchTerm} resetList={this.resetList} watchedList={this.watchedList} toWatchList={this.toWatchList}/>
      </div>
      <div>
        <Movielist movies={this.state.movies} watchedUpdater={this.watchedUpdater}/>
      </div>
    </div>
  )}
}

export default App;

