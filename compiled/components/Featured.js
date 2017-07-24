"use strict";

var Featured = function Featured(props) {
  var path = "http://image.tmdb.org/t/p/w185/" + props.poster.file_path;
  return React.createElement(
    "div",
    null,
    React.createElement("img", { className: "featured-poster", src: path })
  );
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NvbXBvbmVudHMvRmVhdHVyZWQuanN4Il0sIm5hbWVzIjpbIkZlYXR1cmVkIiwicHJvcHMiLCJwYXRoIiwicG9zdGVyIiwiZmlsZV9wYXRoIl0sIm1hcHBpbmdzIjoiOztBQUFBLElBQUlBLFdBQVcsU0FBWEEsUUFBVyxDQUFDQyxLQUFELEVBQVc7QUFDeEIsTUFBSUMsT0FBTyxvQ0FBb0NELE1BQU1FLE1BQU4sQ0FBYUMsU0FBNUQ7QUFDQSxTQUNDO0FBQUE7QUFBQTtBQUNBLGlDQUFLLFdBQVUsaUJBQWYsRUFBaUMsS0FBS0YsSUFBdEM7QUFEQSxHQUREO0FBS0QsQ0FQRCIsImZpbGUiOiJGZWF0dXJlZC5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciBGZWF0dXJlZCA9IChwcm9wcykgPT4ge1xuICB2YXIgcGF0aCA9IFwiaHR0cDovL2ltYWdlLnRtZGIub3JnL3QvcC93MTg1L1wiICsgcHJvcHMucG9zdGVyLmZpbGVfcGF0aDtcbiAgcmV0dXJuIChcbiAgXHQ8ZGl2PlxuXHQgIDxpbWcgY2xhc3NOYW1lPVwiZmVhdHVyZWQtcG9zdGVyXCIgc3JjPXtwYXRofS8+XG5cdDwvZGl2PlxuICApXG59OyJdfQ==