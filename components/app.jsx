//switch axios
//pwa: material UI
//redux
class App extends React.Component {
  constructor() {
  	super()
  	this.state = {
  	  allPosters: null,
  	  posters: null,
  	  poster: null,
  	  details: null
  	}

  	this.getPosters = getPosters.bind(this);
    this.getMovie = getMovie.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleExpandSearch = this.handleExpandSearch.bind(this);
    this.handlePosterClick = this.handlePosterClick.bind(this);

    getPosters('280840', (data) => {
      var postersCopy = data.slice();
      var allPostersCopy = data.splice(1, data.length - 1);
      postersCopy.length > 10 ? postersCopy = postersCopy.splice(1, 11) : postersCopy = postersCopy.splice(1, postersCopy.length - 1);
      this.setState({
        allPosters: allPostersCopy,
        posters: postersCopy,
        poster: data[0]
      });
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    var query = document.getElementsByClassName('search-form')[0].value.trim().toLowerCase().split(' ').map(word => word.charAt(0).toUpperCase()+word.slice(1)).join('+');
    query ? 
      getMovie(query, (id) => {
        id ? 
        getPosters(id, (posters) => {
          var postersCopy = posters.slice().splice(1, posters.length - 1);
          var poster = posters[0];
          var postersView = posters.slice().splice(1, 10)
          this.setState({
            allPosters: postersCopy, 
            posters: postersView,
            poster: poster 
          });
        }) : 
        false;
      }) : 
    console.log('no query sent');
  }

  handleExpandSearch(e) {
    if(this.state.posters.length < this.state.allPosters.length) {
      var allPostersCopy = this.state.allPosters.slice();
      var length = this.state.posters.length + 5;
      var expanded = allPostersCopy.splice(0, length);
      this.setState({
        posters: expanded
      });
    }
  }

  handlePosterClick(e, key) {
    var updatedPoster = this.state.posters[key];
    this.setState({poster: updatedPoster});
  }

  render() {
  	return (
      <div>
        <Search submit={this.handleSubmit}/>
        {this.state.poster ? <Featured poster={this.state.poster}/> : false}
        <ul>
          {this.state.posters ? this.state.posters.map((poster, i) => <Poster click={this.handlePosterClick} index={i} key={i} poster={poster}/>) : false}
        </ul>
        <button onClick={e => this.handleExpandSearch(e)}>See more pics!</button>
      </div>
  	)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));