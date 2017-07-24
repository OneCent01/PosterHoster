'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

//switch axios
//pwa: material UI
//redux
var App = function (_React$Component) {
  _inherits(App, _React$Component);

  function App() {
    _classCallCheck(this, App);

    var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this));

    _this.state = {
      allPosters: null,
      posters: null,
      poster: null,
      details: null
    };

    _this.getPosters = getPosters.bind(_this);
    _this.getMovie = getMovie.bind(_this);
    _this.handleSubmit = _this.handleSubmit.bind(_this);
    _this.handleExpandSearch = _this.handleExpandSearch.bind(_this);
    _this.handlePosterClick = _this.handlePosterClick.bind(_this);

    getPosters('280840', function (data) {
      var postersCopy = data.slice();
      var allPostersCopy = data.splice(1, data.length - 1);
      postersCopy.length > 10 ? postersCopy = postersCopy.splice(1, 11) : postersCopy = postersCopy.splice(1, postersCopy.length - 1);
      _this.setState({
        allPosters: allPostersCopy,
        posters: postersCopy,
        poster: data[0]
      });
    });
    return _this;
  }

  _createClass(App, [{
    key: 'handleSubmit',
    value: function handleSubmit(e) {
      var _this2 = this;

      e.preventDefault();
      var query = document.getElementsByClassName('search-form')[0].value.trim().toLowerCase().split(' ').map(function (word) {
        return word.charAt(0).toUpperCase() + word.slice(1);
      }).join('+');
      query ? getMovie(query, function (id) {
        id ? getPosters(id, function (posters) {
          var postersCopy = posters.slice().splice(1, posters.length - 1);
          var poster = posters[0];
          var postersView = posters.slice().splice(1, 10);
          _this2.setState({
            allPosters: postersCopy,
            posters: postersView,
            poster: poster
          });
        }) : false;
      }) : console.log('no query sent');
    }
  }, {
    key: 'handleExpandSearch',
    value: function handleExpandSearch(e) {
      if (this.state.posters.length < this.state.allPosters.length) {
        var allPostersCopy = this.state.allPosters.slice();
        var length = this.state.posters.length + 5;
        var expanded = allPostersCopy.splice(0, length);
        this.setState({
          posters: expanded
        });
      }
    }
  }, {
    key: 'handlePosterClick',
    value: function handlePosterClick(e, key) {
      var updatedPoster = this.state.posters[key];
      this.setState({ poster: updatedPoster });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      return React.createElement(
        'div',
        null,
        React.createElement(Search, { submit: this.handleSubmit }),
        this.state.poster ? React.createElement(Featured, { poster: this.state.poster }) : false,
        React.createElement(
          'ul',
          null,
          this.state.posters ? this.state.posters.map(function (poster, i) {
            return React.createElement(Poster, { click: _this3.handlePosterClick, index: i, key: i, poster: poster });
          }) : false
        ),
        React.createElement(
          'button',
          { onClick: function onClick(e) {
              return _this3.handleExpandSearch(e);
            } },
          'See more pics!'
        )
      );
    }
  }]);

  return App;
}(React.Component);

ReactDOM.render(React.createElement(App, null), document.getElementById('app'));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NvbXBvbmVudHMvYXBwLmpzeCJdLCJuYW1lcyI6WyJBcHAiLCJzdGF0ZSIsImFsbFBvc3RlcnMiLCJwb3N0ZXJzIiwicG9zdGVyIiwiZGV0YWlscyIsImdldFBvc3RlcnMiLCJiaW5kIiwiZ2V0TW92aWUiLCJoYW5kbGVTdWJtaXQiLCJoYW5kbGVFeHBhbmRTZWFyY2giLCJoYW5kbGVQb3N0ZXJDbGljayIsImRhdGEiLCJwb3N0ZXJzQ29weSIsInNsaWNlIiwiYWxsUG9zdGVyc0NvcHkiLCJzcGxpY2UiLCJsZW5ndGgiLCJzZXRTdGF0ZSIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInF1ZXJ5IiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50c0J5Q2xhc3NOYW1lIiwidmFsdWUiLCJ0cmltIiwidG9Mb3dlckNhc2UiLCJzcGxpdCIsIm1hcCIsIndvcmQiLCJjaGFyQXQiLCJ0b1VwcGVyQ2FzZSIsImpvaW4iLCJpZCIsInBvc3RlcnNWaWV3IiwiY29uc29sZSIsImxvZyIsImV4cGFuZGVkIiwia2V5IiwidXBkYXRlZFBvc3RlciIsImkiLCJSZWFjdCIsIkNvbXBvbmVudCIsIlJlYWN0RE9NIiwicmVuZGVyIiwiZ2V0RWxlbWVudEJ5SWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7SUFDTUEsRzs7O0FBQ0osaUJBQWM7QUFBQTs7QUFBQTs7QUFFYixVQUFLQyxLQUFMLEdBQWE7QUFDWEMsa0JBQVksSUFERDtBQUVYQyxlQUFTLElBRkU7QUFHWEMsY0FBUSxJQUhHO0FBSVhDLGVBQVM7QUFKRSxLQUFiOztBQU9BLFVBQUtDLFVBQUwsR0FBa0JBLFdBQVdDLElBQVgsT0FBbEI7QUFDQyxVQUFLQyxRQUFMLEdBQWdCQSxTQUFTRCxJQUFULE9BQWhCO0FBQ0EsVUFBS0UsWUFBTCxHQUFvQixNQUFLQSxZQUFMLENBQWtCRixJQUFsQixPQUFwQjtBQUNBLFVBQUtHLGtCQUFMLEdBQTBCLE1BQUtBLGtCQUFMLENBQXdCSCxJQUF4QixPQUEx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QUwsQ0FBV0csTUFBWCxHQUFvQixvQkFBQyxRQUFELElBQVUsUUFBUSxLQUFLSCxLQUFMLENBQVdHLE1BQTdCLEdBQXBCLEdBQTZELEtBRmhFO0FBR0U7QUFBQTtBQUFBO0FBQ0csZUFBS0gsS0FBTCxDQUFXRSxPQUFYLEdBQXFCLEtBQUtGLEtBQUwsQ0FBV0UsT0FBWCxDQUFtQnlCLEdBQW5CLENBQXVCLFVBQUN4QixNQUFELEVBQVNvQyxDQUFUO0FBQUEsbUJBQWUsb0JBQUMsTUFBRCxJQUFRLE9BQU8sT0FBSzdCLGlCQUFwQixFQUF1QyxPQUFPNkIsQ0FBOUMsRUFBaUQsS0FBS0EsQ0FBdEQsRUFBeUQsUUFBUXBDLE1BQWpFLEdBQWY7QUFBQSxXQUF2QixDQUFyQixHQUF5STtBQUQ1SSxTQUhGO0FBTUU7QUFBQTtBQUFBLFlBQVEsU0FBUztBQUFBLHFCQUFLLE9BQUtNLGtCQUFMLENBQXdCUyxDQUF4QixDQUFMO0FBQUEsYUFBakI7QUFBQTtBQUFBO0FBTkYsT0FESDtBQVVBOzs7O0VBNUVlc0IsTUFBTUMsUzs7QUErRXhCQyxTQUFTQyxNQUFULENBQWdCLG9CQUFDLEdBQUQsT0FBaEIsRUFBeUJ0QixTQUFTdUIsY0FBVCxDQUF3QixLQUF4QixDQUF6QiIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvL3N3aXRjaCBheGlvc1xuLy9wd2E6IG1hdGVyaWFsIFVJXG4vL3JlZHV4XG5jbGFzcyBBcHAgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgXHRzdXBlcigpXG4gIFx0dGhpcy5zdGF0ZSA9IHtcbiAgXHQgIGFsbFBvc3RlcnM6IG51bGwsXG4gIFx0ICBwb3N0ZXJzOiBudWxsLFxuICBcdCAgcG9zdGVyOiBudWxsLFxuICBcdCAgZGV0YWlsczogbnVsbFxuICBcdH1cblxuICBcdHRoaXMuZ2V0UG9zdGVycyA9IGdldFBvc3RlcnMuYmluZCh0aGlzKTtcbiAgICB0aGlzLmdldE1vdmllID0gZ2V0TW92aWUuYmluZCh0aGlzKTtcbiAgICB0aGlzLmhhbmRsZVN1Ym1pdCA9IHRoaXMuaGFuZGxlU3VibWl0LmJpbmQodGhpcyk7XG4gICAgdGhpcy5oYW5kbGVFeHBhbmRTZWFyY2ggPSB0aGlzLmhhbmRsZUV4cGFuZFNlYXJjaC5iaW5kKHRoaXMpO1xuICAgIHRoaXMuaGFuZGxlUG9zdGVyQ2xpY2sgPSB0aGlzLmhhbmRsZVBvc3RlckNsaWNrLmJpbmQodGhpcyk7XG5cbiAgICBnZXRQb3N0ZXJzKCcyODA4NDAnLCAoZGF0YSkgPT4ge1xuICAgICAgdmFyIHBvc3RlcnNDb3B5ID0gZGF0YS5zbGljZSgpO1xuICAgICAgdmFyIGFsbFBvc3RlcnNDb3B5ID0gZGF0YS5zcGxpY2UoMSwgZGF0YS5sZW5ndGggLSAxKTtcbiAgICAgIHBvc3RlcnNDb3B5Lmxlbmd0aCA+IDEwID8gcG9zdGVyc0NvcHkgPSBwb3N0ZXJzQ29weS5zcGxpY2UoMSwgMTEpIDogcG9zdGVyc0NvcHkgPSBwb3N0ZXJzQ29weS5zcGxpY2UoMSwgcG9zdGVyc0NvcHkubGVuZ3RoIC0gMSk7XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgYWxsUG9zdGVyczogYWxsUG9zdGVyc0NvcHksXG4gICAgICAgIHBvc3RlcnM6IHBvc3RlcnNDb3B5LFxuICAgICAgICBwb3N0ZXI6IGRhdGFbMF1cbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgaGFuZGxlU3VibWl0KGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgdmFyIHF1ZXJ5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnc2VhcmNoLWZvcm0nKVswXS52YWx1ZS50cmltKCkudG9Mb3dlckNhc2UoKS5zcGxpdCgnICcpLm1hcCh3b3JkID0+IHdvcmQuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkrd29yZC5zbGljZSgxKSkuam9pbignKycpO1xuICAgIHF1ZXJ5ID8gXG4gICAgICBnZXRNb3ZpZShxdWVyeSwgKGlkKSA9PiB7XG4gICAgICAgIGlkID8gXG4gICAgICAgIGdldFBvc3RlcnMoaWQsIChwb3N0ZXJzKSA9PiB7XG4gICAgICAgICAgdmFyIHBvc3RlcnNDb3B5ID0gcG9zdGVycy5zbGljZSgpLnNwbGljZSgxLCBwb3N0ZXJzLmxlbmd0aCAtIDEpO1xuICAgICAgICAgIHZhciBwb3N0ZXIgPSBwb3N0ZXJzWzBdO1xuICAgICAgICAgIHZhciBwb3N0ZXJzVmlldyA9IHBvc3RlcnMuc2xpY2UoKS5zcGxpY2UoMSwgMTApXG4gICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBhbGxQb3N0ZXJzOiBwb3N0ZXJzQ29weSwgXG4gICAgICAgICAgICBwb3N0ZXJzOiBwb3N0ZXJzVmlldyxcbiAgICAgICAgICAgIHBvc3RlcjogcG9zdGVyIFxuICAgICAgICAgIH0pO1xuICAgICAgICB9KSA6IFxuICAgICAgICBmYWxzZTtcbiAgICAgIH0pIDogXG4gICAgY29uc29sZS5sb2coJ25vIHF1ZXJ5IHNlbnQnKTtcbiAgfVxuXG4gIGhhbmRsZUV4cGFuZFNlYXJjaChlKSB7XG4gICAgaWYodGhpcy5zdGF0ZS5wb3N0ZXJzLmxlbmd0aCA8IHRoaXMuc3RhdGUuYWxsUG9zdGVycy5sZW5ndGgpIHtcbiAgICAgIHZhciBhbGxQb3N0ZXJzQ29weSA9IHRoaXMuc3RhdGUuYWxsUG9zdGVycy5zbGljZSgpO1xuICAgICAgdmFyIGxlbmd0aCA9IHRoaXMuc3RhdGUucG9zdGVycy5sZW5ndGggKyA1O1xuICAgICAgdmFyIGV4cGFuZGVkID0gYWxsUG9zdGVyc0NvcHkuc3BsaWNlKDAsIGxlbmd0aCk7XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgcG9zdGVyczogZXhwYW5kZWRcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIGhhbmRsZVBvc3RlckNsaWNrKGUsIGtleSkge1xuICAgIHZhciB1cGRhdGVkUG9zdGVyID0gdGhpcy5zdGF0ZS5wb3N0ZXJzW2tleV07XG4gICAgdGhpcy5zZXRTdGF0ZSh7cG9zdGVyOiB1cGRhdGVkUG9zdGVyfSk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gIFx0cmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxTZWFyY2ggc3VibWl0PXt0aGlzLmhhbmRsZVN1Ym1pdH0vPlxuICAgICAgICB7dGhpcy5zdGF0ZS5wb3N0ZXIgPyA8RmVhdHVyZWQgcG9zdGVyPXt0aGlzLnN0YXRlLnBvc3Rlcn0vPiA6IGZhbHNlfVxuICAgICAgICA8dWw+XG4gICAgICAgICAge3RoaXMuc3RhdGUucG9zdGVycyA/IHRoaXMuc3RhdGUucG9zdGVycy5tYXAoKHBvc3RlciwgaSkgPT4gPFBvc3RlciBjbGljaz17dGhpcy5oYW5kbGVQb3N0ZXJDbGlja30gaW5kZXg9e2l9IGtleT17aX0gcG9zdGVyPXtwb3N0ZXJ9Lz4pIDogZmFsc2V9XG4gICAgICAgIDwvdWw+XG4gICAgICAgIDxidXR0b24gb25DbGljaz17ZSA9PiB0aGlzLmhhbmRsZUV4cGFuZFNlYXJjaChlKX0+U2VlIG1vcmUgcGljcyE8L2J1dHRvbj5cbiAgICAgIDwvZGl2PlxuICBcdClcbiAgfVxufVxuXG5SZWFjdERPTS5yZW5kZXIoPEFwcCAvPiwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FwcCcpKTsiXX0=