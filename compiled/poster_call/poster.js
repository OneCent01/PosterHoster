'use strict';

var getMovie = function getMovie(query, callback) {
  var movieUrl = 'https://api.themoviedb.org/3/search/movie?api_key=fa059cacaa6cf4464cc9cff9c743d8d1&query=' + query;
  console.log('url: ', movieUrl);
  $.ajax({
    url: movieUrl,
    method: 'GET',
    success: function success(data) {
      if (data.results[0]) {
        callback(data.results[0].id);
      } else {
        alert('no results, try again!');
      }
    },
    error: function error(err) {
      return console.log('error in title search: ', err);
    }
  });
};

var getPosters = function getPosters(id, callback) {
  $.ajax({
    url: 'https://api.themoviedb.org/3/movie/' + id + '/images?api_key=fa059cacaa6cf4464cc9cff9c743d8d1',
    method: 'GET',
    success: function success(data) {
      var posters = data.posters;
      callback(posters);
    },
    error: function error(err) {
      console.log('error in the search: ', err);
    }
  });
};

window.getMovie = getMovie;
window.getPosters = getPosters;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3Bvc3Rlcl9jYWxsL3Bvc3Rlci5qcyJdLCJuYW1lcyI6WyJnZXRNb3ZpZSIsInF1ZXJ5IiwiY2FsbGJhY2siLCJtb3ZpZVVybCIsImNvbnNvbGUiLCJsb2ciLCIkIiwiYWpheCIsInVybCIsIm1ldGhvZCIsInN1Y2Nlc3MiLCJkYXRhIiwicmVzdWx0cyIsImlkIiwiYWxlcnQiLCJlcnJvciIsImVyciIsImdldFBvc3RlcnMiLCJwb3N0ZXJzIiwid2luZG93Il0sIm1hcHBpbmdzIjoiOztBQUFBLElBQUlBLFdBQVcsU0FBWEEsUUFBVyxDQUFDQyxLQUFELEVBQVFDLFFBQVIsRUFBcUI7QUFDbEMsTUFBSUMsV0FBVyw4RkFBOEZGLEtBQTdHO0FBQ0FHLFVBQVFDLEdBQVIsQ0FBWSxPQUFaLEVBQXFCRixRQUFyQjtBQUNBRyxJQUFFQyxJQUFGLENBQU87QUFDTEMsU0FBS0wsUUFEQTtBQUVMTSxZQUFRLEtBRkg7QUFHTEMsYUFBUyxpQkFBQ0MsSUFBRCxFQUFVO0FBQ2pCLFVBQUdBLEtBQUtDLE9BQUwsQ0FBYSxDQUFiLENBQUgsRUFBbUI7QUFDakJWLGlCQUFTUyxLQUFLQyxPQUFMLENBQWEsQ0FBYixFQUFnQkMsRUFBekI7QUFDRCxPQUZELE1BRU87QUFDTEMsY0FBTSx3QkFBTjtBQUNEO0FBRUYsS0FWSTtBQVdMQyxXQUFPLGVBQUNDLEdBQUQ7QUFBQSxhQUFTWixRQUFRQyxHQUFSLENBQVkseUJBQVosRUFBdUNXLEdBQXZDLENBQVQ7QUFBQTtBQVhGLEdBQVA7QUFhRCxDQWhCRDs7QUFrQkEsSUFBSUMsYUFBYSxTQUFiQSxVQUFhLENBQUNKLEVBQUQsRUFBS1gsUUFBTCxFQUFrQjtBQUNqQ0ksSUFBRUMsSUFBRixDQUFPO0FBQ0xDLFNBQUssd0NBQXdDSyxFQUF4QyxHQUE2QyxrREFEN0M7QUFFTEosWUFBUSxLQUZIO0FBR0xDLGFBQVMsaUJBQUNDLElBQUQsRUFBVTtBQUNqQixVQUFJTyxVQUFVUCxLQUFLTyxPQUFuQjtBQUNBaEIsZUFBU2dCLE9BQVQ7QUFDRCxLQU5JO0FBT0xILFdBQU8sZUFBQ0MsR0FBRCxFQUFTO0FBQ2RaLGNBQVFDLEdBQVIsQ0FBWSx1QkFBWixFQUFxQ1csR0FBckM7QUFDRDtBQVRJLEdBQVA7QUFXRCxDQVpEOztBQWNBRyxPQUFPbkIsUUFBUCxHQUFrQkEsUUFBbEI7QUFDQW1CLE9BQU9GLFVBQVAsR0FBb0JBLFVBQXBCIiwiZmlsZSI6InBvc3Rlci5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciBnZXRNb3ZpZSA9IChxdWVyeSwgY2FsbGJhY2spID0+IHtcbiAgdmFyIG1vdmllVXJsID0gJ2h0dHBzOi8vYXBpLnRoZW1vdmllZGIub3JnLzMvc2VhcmNoL21vdmllP2FwaV9rZXk9ZmEwNTljYWNhYTZjZjQ0NjRjYzljZmY5Yzc0M2Q4ZDEmcXVlcnk9JyArIHF1ZXJ5O1xuICBjb25zb2xlLmxvZygndXJsOiAnLCBtb3ZpZVVybCk7XG4gICQuYWpheCh7XG4gICAgdXJsOiBtb3ZpZVVybCxcbiAgICBtZXRob2Q6ICdHRVQnLCBcbiAgICBzdWNjZXNzOiAoZGF0YSkgPT4ge1xuICAgICAgaWYoZGF0YS5yZXN1bHRzWzBdKXtcbiAgICAgICAgY2FsbGJhY2soZGF0YS5yZXN1bHRzWzBdLmlkKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGFsZXJ0KCdubyByZXN1bHRzLCB0cnkgYWdhaW4hJylcbiAgICAgIH1cbiAgICAgIFxuICAgIH0sXG4gICAgZXJyb3I6IChlcnIpID0+IGNvbnNvbGUubG9nKCdlcnJvciBpbiB0aXRsZSBzZWFyY2g6ICcsIGVycilcbiAgfSlcbn1cblxudmFyIGdldFBvc3RlcnMgPSAoaWQsIGNhbGxiYWNrKSA9PiB7XG4gICQuYWpheCh7XG4gICAgdXJsOiAnaHR0cHM6Ly9hcGkudGhlbW92aWVkYi5vcmcvMy9tb3ZpZS8nICsgaWQgKyAnL2ltYWdlcz9hcGlfa2V5PWZhMDU5Y2FjYWE2Y2Y0NDY0Y2M5Y2ZmOWM3NDNkOGQxJyxcbiAgICBtZXRob2Q6ICdHRVQnLFxuICAgIHN1Y2Nlc3M6IChkYXRhKSA9PiB7XG4gICAgICB2YXIgcG9zdGVycyA9IGRhdGEucG9zdGVycztcbiAgICAgIGNhbGxiYWNrKHBvc3RlcnMpO1xuICAgIH0sXG4gICAgZXJyb3I6IChlcnIpID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKCdlcnJvciBpbiB0aGUgc2VhcmNoOiAnLCBlcnIpO1xuICAgIH1cbiAgfSk7XG59XG5cbndpbmRvdy5nZXRNb3ZpZSA9IGdldE1vdmllO1xud2luZG93LmdldFBvc3RlcnMgPSBnZXRQb3N0ZXJzO1xuIl19