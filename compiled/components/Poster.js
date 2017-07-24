"use strict";

var Poster = function Poster(props) {
  var path = "http://image.tmdb.org/t/p/w185/" + props.poster.file_path;
  var key = props.index;
  return React.createElement(
    "div",
    { onClick: function onClick(e) {
        return props.click(e, key);
      }, className: "posters" },
    React.createElement("img", { src: path })
  );
};

window.Poster = Poster;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NvbXBvbmVudHMvUG9zdGVyLmpzeCJdLCJuYW1lcyI6WyJQb3N0ZXIiLCJwcm9wcyIsInBhdGgiLCJwb3N0ZXIiLCJmaWxlX3BhdGgiLCJrZXkiLCJpbmRleCIsImNsaWNrIiwiZSIsIndpbmRvdyJdLCJtYXBwaW5ncyI6Ijs7QUFBQSxJQUFJQSxTQUFTLFNBQVRBLE1BQVMsQ0FBQ0MsS0FBRCxFQUFXO0FBQ3RCLE1BQUlDLE9BQU8sb0NBQW9DRCxNQUFNRSxNQUFOLENBQWFDLFNBQTVEO0FBQ0EsTUFBSUMsTUFBTUosTUFBTUssS0FBaEI7QUFDQSxTQUNDO0FBQUE7QUFBQSxNQUFLLFNBQVM7QUFBQSxlQUFLTCxNQUFNTSxLQUFOLENBQVlDLENBQVosRUFBZUgsR0FBZixDQUFMO0FBQUEsT0FBZCxFQUF3QyxXQUFVLFNBQWxEO0FBQ0UsaUNBQUssS0FBS0gsSUFBVjtBQURGLEdBREQ7QUFLRCxDQVJEOztBQVVBTyxPQUFPVCxNQUFQLEdBQWdCQSxNQUFoQiIsImZpbGUiOiJQb3N0ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgUG9zdGVyID0gKHByb3BzKSA9PiB7XG4gIHZhciBwYXRoID0gXCJodHRwOi8vaW1hZ2UudG1kYi5vcmcvdC9wL3cxODUvXCIgKyBwcm9wcy5wb3N0ZXIuZmlsZV9wYXRoO1xuICB2YXIga2V5ID0gcHJvcHMuaW5kZXg7XG4gIHJldHVybiAoXG4gIFx0PGRpdiBvbkNsaWNrPXtlID0+IHByb3BzLmNsaWNrKGUsIGtleSl9IGNsYXNzTmFtZT1cInBvc3RlcnNcIj5cbiAgXHQgIDxpbWcgc3JjPXtwYXRofS8+XG4gIFx0PC9kaXY+XG4gICk7XG59XG5cbndpbmRvdy5Qb3N0ZXIgPSBQb3N0ZXI7Il19