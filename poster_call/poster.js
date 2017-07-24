var getMovie = (query, callback) => {
  var movieUrl = 'https://api.themoviedb.org/3/search/movie?api_key=fa059cacaa6cf4464cc9cff9c743d8d1&query=' + query;
  console.log('url: ', movieUrl);
  $.ajax({
    url: movieUrl,
    method: 'GET', 
    success: (data) => {
      if(data.results[0]){
        callback(data.results[0].id);
      } else {
        alert('no results, try again!')
      }
      
    },
    error: (err) => console.log('error in title search: ', err)
  })
}

var getPosters = (id, callback) => {
  $.ajax({
    url: 'https://api.themoviedb.org/3/movie/' + id + '/images?api_key=fa059cacaa6cf4464cc9cff9c743d8d1',
    method: 'GET',
    success: (data) => {
      var posters = data.posters;
      callback(posters);
    },
    error: (err) => {
      console.log('error in the search: ', err);
    }
  });
}

window.getMovie = getMovie;
window.getPosters = getPosters;
